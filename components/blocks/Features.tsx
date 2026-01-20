import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Features = ({ title, items = [], theme }: any) => {
  const primary = theme?.primary || '#2563eb';
  const text = theme?.text || '#000000';
  const cardBg = theme?.background === '#ffffff' ? '#ffffff' : 'rgba(255,255,255,0.05)';

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16" style={{ color: text }}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item: any, idx: number) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border border-gray-100/10 shadow-sm hover:shadow-md transition"
              style={{ backgroundColor: cardBg }}
            >
              <CheckCircle className="w-10 h-10 mb-6" style={{ color: primary }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: text }}>{item.title}</h3>
              <p className="opacity-70 leading-relaxed" style={{ color: text }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};