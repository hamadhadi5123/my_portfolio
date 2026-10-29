import React from 'react';

const HOBBIES = [
  { name: 'Coding', icon: '💻', desc: 'Exploring algorithmic puzzles, modern web frameworks & utility tools' },
  { name: 'Cycling', icon: '🚴', desc: 'Staying active with outdoor endurance riding and fitness' },
  { name: 'Painting', icon: '🎨', desc: 'Creative visual art, spatial aesthetics and sketch designs' },
  { name: 'Badminton', icon: '🏸', desc: 'Fast reflex training, agility, and competitive rallies' },
  { name: 'Cricket', icon: '🏏', desc: 'Strategic gameplay, teamwork, and athletic discipline' }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section hobbies-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Passions</span>
          <h2 className="section-title">Hobbies &amp; Interests</h2>
          <div className="accent-bar"></div>
          <p className="section-intro">
            Personal activities and creative pursuits that foster disciplined focus, physical energy, and innovation.
          </p>
        </div>

        <div className="hobbies-grid">
          {HOBBIES.map((h) => (
            <div key={h.name} className="hobby-card">
              <span className="hobby-emoji">{h.icon}</span>
              <h3 className="hobby-name">{h.name}</h3>
              <p className="hobby-summary">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
