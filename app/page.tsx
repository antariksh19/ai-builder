"use client";

import { useState } from 'react';
import { COMPONENT_MAP } from '@/components/componentMap';
import { generateHtml } from '@/utils/generateHtml';
import { Loader2, Download, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { Skeleton } from '@/components/Skeleton';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [layout, setLayout] = useState<any[]>([]);
  const [theme, setTheme] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) {
      toast.error("Please describe your website first!");
      return;
    }
    
    setLoading(true);
    setLayout([]); 
    setTheme(null);
    
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await res.json();
      
      if (data.error) throw new Error(data.error);
      
      if (data.theme) setTheme(data.theme);
      if (data.layout) setLayout(data.layout);
      
      toast.success("Website generated successfully!");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    if (layout.length === 0) return;
    const html = generateHtml(layout, theme);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("Downloaded HTML file");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm px-6 py-4">
        <div className="max-w-5xl mx-auto flex gap-4 items-center flex-wrap">
          <div className="flex items-center gap-2 mr-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">AI Builder</span>
          </div>

          <input
            type="text"
            placeholder="E.g., 'A cyberpunk crypto landing page'"
            className="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 disabled:opacity-70"
          >
            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Generate"}
          </button>
          
          <button
            onClick={handleExport}
            disabled={layout.length === 0 || loading}
            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </header>

      <main className="flex-grow p-4 md:p-8">
        {loading ? (
          <Skeleton />
        ) : layout.length === 0 ? (
          <div className="h-[60vh] flex flex-col items-center justify-center text-gray-400 space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-lg font-medium">Ready to build something amazing?</p>
          </div>
        ) : (
          <div 
            className="max-w-7xl mx-auto shadow-2xl rounded-xl overflow-hidden animate-in fade-in duration-500 min-h-[80vh]"
            style={{ 
              backgroundColor: theme?.background || '#ffffff', 
              color: theme?.text || '#000000' 
            }}
          >
            {layout.map((block, index) => {
              const Component = COMPONENT_MAP[block.type];
              if (!Component) return null;
              return (
                <Component 
                  key={index} 
                  {...block.props} 
                  theme={theme} 
                />
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}