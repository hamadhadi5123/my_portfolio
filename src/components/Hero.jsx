import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-badge">Computer Science Undergraduate &bull; 7th Semester</div>
        
        <div className="hero-avatar-wrapper">
          <img
            src="./images/profile.jpg"
            alt="Muhammad Hamad Asghar profile portrait"
            width="130"
            height="130"
            className="hero-avatar"
            onError={(e) => {
              e.currentTarget.src = './images/avatar.svg';
            }}
          />
        </div>

        <h1 className="hero-title">Muhammad Hamad Asghar</h1>

        <p className="hero-subtitle">
          BS Computer Science student at <span className="gold-text">Riphah International University</span>, passionate about software engineering, mobile application development, algorithm design, and building dependable solutions.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
