import React from 'react';

const HOBBIES = [
  { name: 'Coding', icon: '💻', desc: 'Exploring algorithmic puzzles & experimental apps' },
  { name: 'Cycling', icon: '🚴', desc: 'Staying active with outdoor fitness rides' },
  { name: 'Painting', icon: '🎨', desc: 'Creative visual art and design sketches' },
  { name: 'Badminton', icon: '🏸', desc: 'Agility and fast-paced court rallies' },
  { name: 'Cricket', icon: '🏏', desc: 'Team sports, strategy, and sportsmanship' }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section hobbies-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interests</span>
          <h2 className="section-title">Hobbies &amp; Personal Interests</h2>
          <div className="gold-divider"></div>
          <p className="section-intro">
            Activities and pursuits that cultivate creativity, physical wellness, and problem-solving focus.
          </p>
        </div>

        <div className="hobbies-grid">
          {HOBBIES.map((h) => (
            <div key={h.name} className="hobby-card">
              <span className="hobby-icon" role="img" aria-label={h.name}>{h.icon}</span>
              <h3 className="hobby-title">{h.name}</h3>
              <p className="hobby-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
