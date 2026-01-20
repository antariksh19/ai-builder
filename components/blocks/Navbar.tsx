import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar = ({ logo, links = [], theme }: any) => {
  const text = theme?.text || '#000000';
  const navBg = theme?.background === '#ffffff' ? '#ffffff' : 'rgba(255,255,255,0.05)';

  return (
    <nav 
      className="sticky top-0 z-40 border-b border-gray-200/10 backdrop-blur-md"
      style={{ backgroundColor: navBg }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold" style={{ color: text }}>{logo}</h1>
        <div className="hidden md:flex gap-6">
          {links.map((link: any, idx: number) => (
            <a key={idx} href="#" className="font-medium hover:opacity-70 transition" style={{ color: text }}>
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" style={{ color: text }}><Menu /></button>
      </div>
    </nav>
  );
};