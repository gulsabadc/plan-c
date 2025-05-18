import React from 'react';

const Services = () => (
  <section style={{ background: 'var(--primary-green)', color: 'var(--text-dark)', padding: '2rem 1rem', textAlign: 'center' }}>
    <h2>Services</h2>
    <ul style={{ listStyle: 'none', padding: 0, maxWidth: 400, margin: '2rem auto' }}>
      <li style={{ background: 'var(--primary-dark)', color: 'var(--text-white)', margin: '1rem 0', padding: '1rem', borderRadius: '8px' }}>Product Vision & Strategy</li>
      <li style={{ background: 'var(--primary-dark)', color: 'var(--text-white)', margin: '1rem 0', padding: '1rem', borderRadius: '8px' }}>Market Analysis & Positioning</li>
      <li style={{ background: 'var(--primary-dark)', color: 'var(--text-white)', margin: '1rem 0', padding: '1rem', borderRadius: '8px' }}>Agile Product Development</li>
      <li style={{ background: 'var(--primary-dark)', color: 'var(--text-white)', margin: '1rem 0', padding: '1rem', borderRadius: '8px' }}>Go-to-Market Planning</li>
      <li style={{ background: 'var(--primary-dark)', color: 'var(--text-white)', margin: '1rem 0', padding: '1rem', borderRadius: '8px' }}>AI & Emerging Technology Integration</li>
    </ul>
  </section>
);

export default Services; 