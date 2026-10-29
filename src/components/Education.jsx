import React from 'react';

const EDUCATION_HISTORY = [
  {
    degree: 'Bachelors - Computer Science (cont.)',
    institution: 'Riphah International University',
    duration: '2023 – Present',
    badge: '7th Semester (In Progress)',
    details: 'Pursuing comprehensive computer science curriculum including Data Structures, Algorithms, OOP, Database Systems, Software Engineering, and Capstone Project development.'
  },
  {
    degree: 'FSc - Pre-Medical',
    institution: 'BISE D.I. Khan Board',
    duration: '2021 – 2023',
    badge: 'Intermediate Completed',
    details: 'Completed Higher Secondary Certificate in Pre-Medical sciences with strong analytical, empirical, and deductive reasoning foundations.'
  },
  {
    degree: 'Matric - Science',
    institution: 'BISE D.I. Khan Board',
    duration: '2019 – 2021',
    badge: 'Secondary School Certificate',
    details: 'Completed foundational secondary schooling in basic sciences with solid mathematical grounding.'
  }
];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Qualification</span>
          <h2 className="section-title">Education History</h2>
          <div className="accent-bar"></div>
          <p className="section-intro">
            Formal academic background and ongoing undergraduate computer science degree studies.
          </p>
        </div>

        <div className="education-list">
          {EDUCATION_HISTORY.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-top-row">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                </div>
                <div className="edu-meta-tags">
                  <span className="edu-period">{edu.duration}</span>
                  <span className="edu-status-pill">{edu.badge}</span>
                </div>
              </div>
              <p className="edu-desc">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
