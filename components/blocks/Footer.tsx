import React from 'react';

export const Footer = ({ copyright, socialLinks = [], theme }: any) => {
  const bg = theme?.secondary || '#1f2937';
  
  return (
    <footer className="py-12 px-6 mt-auto" style={{ backgroundColor: bg, color: '#ffffff' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="opacity-80">© {new Date().getFullYear()} {copyright}</p>
        <div className="flex gap-4">
          {socialLinks.map((link: any, idx: number) => (
            <a key={idx} href="#" className="opacity-70 hover:opacity-100 transition">
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};