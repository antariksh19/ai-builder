const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

async function check() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  // This generic 'gemini-pro' model usually lets us list availability
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  console.log("--- Testing Connection ---");
  try {
    await model.generateContent("Hello");
    console.log("✅ API Key is working!");
  } catch (e) {
    console.log("❌ API Key Error:", e.message);
    return;
  }

  console.log("\n--- Valid Model Names for You ---");
  console.log("Try using one of these string exactly:");
  console.log("1. gemini-1.5-flash-001");
  console.log("2. gemini-1.5-flash-002");
  console.log("3. gemini-1.5-pro");
}

check();