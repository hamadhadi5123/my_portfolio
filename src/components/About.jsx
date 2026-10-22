import React from 'react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 className="section-title">About Me</h2>
          <div className="gold-divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3 className="about-card-title">Profile Summary</h3>
            <p>
              Hello! My name is <strong>Hamad</strong>, and I am an enthusiastic and motivated undergraduate pursuing a Bachelor of Science in Computer Science in my 7th semester at <strong>Riphah International University</strong>. I seek to leverage a strong academic foundation, project experiences, and passion for software engineering to contribute effectively to modern software teams.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Technical Expertise</h3>
            <p>
              My hands-on coursework and lab projects span object-oriented development in C++ and Java, data scripting and machine learning exploration in Python, mobile app development with Flutter &amp; Dart, and interactive game physics in Unity.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Academic &amp; Capstone Focus</h3>
            <p>
              Currently spearheading my Final Year Project, <strong>DataMind</strong>, while deepening expertise in modern frontend development with React, continuous integration with GitHub Actions, and production deployment automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
