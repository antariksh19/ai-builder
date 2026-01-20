import React from 'react';

export const Hero = ({ title, subtitle, ctaText = "Get Started", theme }: any) => {
  const primary = theme?.primary || '#2563eb';
  const text = theme?.text || '#000000';

  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ color: text }}>
          {title}
        </h1>
        <p className="text-xl mb-10 opacity-80" style={{ color: text }}>
          {subtitle}
        </p>
        <button 
          style={{ backgroundColor: primary, color: theme?.background || '#ffffff' }}
          className="px-8 py-3 rounded-full font-bold shadow-lg hover:brightness-110 transition transform hover:-translate-y-1"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};