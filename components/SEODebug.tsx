'use client';

import { log } from 'node:console';
import { useEffect, useState } from 'react';

export default function SEODebug() {
  const [seoData, setSeoData] = useState({ title: '', description: '', ogType: '' });

  useEffect(() => {
    setSeoData({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content') || ''
    });
  }, []);

  // Component removed for production
  // console.log("seoData",seoData);

  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, background: 'black', color: 'white', padding: '10px', fontSize: '12px', zIndex: 9999 }}>
      <div>Title: {seoData.title}</div>
      <div>Meta desc: {seoData.description.slice(0, 50)}...</div>
      <div>OG type: {seoData.ogType}</div>
    </div>
  );
}