import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { COMPONENT_MAP } from '@/components/componentMap';

export const generateHtml = (layout: any[], theme: any) => {
  const componentsHtml = layout.map((block) => {
    const Component = COMPONENT_MAP[block.type];
    if (!Component) return '';
    return renderToStaticMarkup(
      <Component {...block.props} theme={theme} />
    );
  }).join('\n');

  const bg = theme?.background || '#ffffff';
  const text = theme?.text || '#000000';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generated Website</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body style="background-color: ${bg}; color: ${text};">
      ${componentsHtml}
    </body>
    </html>
  `;
};