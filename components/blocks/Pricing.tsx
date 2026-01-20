import React from 'react';
import { Check } from 'lucide-react';

export const Pricing = ({ title, plans = [], theme }: any) => {
  const primary = theme?.primary || '#2563eb';
  const text = theme?.text || '#000000';
  const cardBg = theme?.background === '#ffffff' ? '#f9fafb' : 'rgba(255,255,255,0.05)';

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16" style={{ color: text }}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan: any, idx: number) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border border-gray-200/20 shadow-lg flex flex-col relative hover:-translate-y-1 transition-transform"
              style={{ backgroundColor: cardBg, color: text }}
            >
              <h3 className="text-xl font-bold mb-2 opacity-80">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-lg font-normal opacity-60">/mo</span>
              </div>
              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm opacity-80">
                    <Check size={16} style={{ color: primary }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                style={{ backgroundColor: primary, color: '#ffffff' }}
                className="w-full py-3 rounded-lg font-bold hover:brightness-110 transition"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};