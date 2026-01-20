import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: 'Missing GROQ_API_KEY' }, { status: 500 });
    }

    const client = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    });

    const systemPrompt = `
      You are a website builder. Output ONLY valid JSON.
      
      1. Design a color theme based on the user's request.
      2. Generate the component layout.

      Components available:
      - Navbar (props: logo, links[{label}])
      - Hero (props: title, subtitle, ctaText)
      - Features (props: title, items[{title, description}])
      - Pricing (props: title, plans[{name, price, features[string]}])
      - Footer (props: copyright, socialLinks[{platform}])

      Request: "${prompt}"

      Return strictly this JSON structure:
      {
        "theme": {
          "primary": "hex code (e.g. #3b82f6)",
          "background": "hex code (e.g. #ffffff or #111827)",
          "text": "hex code (contrasting text color)",
          "secondary": "hex code (accent color)"
        },
        "layout": [
           { "type": "Navbar", "props": { ... } },
           { "type": "Hero", "props": { ... } },
           // ... other components
        ]
      }
    `;

    const completion = await client.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" },
    });

    const content = completion.choices[0].message.content;
    return NextResponse.json(JSON.parse(content || "{}"));

  } catch (error: any) {
    console.error('Groq Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}