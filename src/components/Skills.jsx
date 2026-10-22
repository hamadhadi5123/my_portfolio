import React, { useState } from 'react';

const SKILLS_DATA = [
  {
    category: 'Programming Languages',
    type: 'languages',
    skills: [
      { name: 'C++ Programming', detail: 'PF, OOP, Pointer manipulation' },
      { name: 'Java Programming', detail: 'Core OOP, Classes & Interfaces' },
      { name: 'Python Programming', detail: 'Scripting, Data handling, ML basics' },
      { name: 'Dart', detail: 'Cross-platform client logic' },
      { name: 'JavaScript', detail: 'ES6+ fundamentals & DOM API' }
    ]
  },
  {
    category: 'Web & Mobile Development',
    type: 'web-mobile',
    skills: [
      { name: 'React.js', detail: 'Component architecture, Hooks, State' },
      { name: 'Flutter & Dart', detail: 'Cross-platform mobile UI' },
      { name: 'HTML5 & CSS3', detail: 'Semantic markup & responsive layouts' },
      { name: 'JavaScript fundamentals', detail: 'Modern async & event handling' },
      { name: 'Firebase fundamentals', detail: 'Authentication & real-time store' },
      { name: 'Mobile App Development', detail: 'State management & native integration' }
    ]
  },
  {
    category: 'Computer Science Core',
    type: 'core',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', detail: 'Encapsulation, Inheritance, Polymorphism' },
      { name: 'Data Structures & Algorithms (DSA)', detail: 'Arrays, Lists, Trees, Graph search' },
      { name: 'Database Management & SQL', detail: 'Relational schema, Queries, Joins' },
      { name: 'Problem Solving', detail: 'Algorithmic efficiency & analytical debugging' }
    ]
  },
  {
    category: 'Tools & Environments',
    type: 'tools',
    skills: [
      { name: 'Git & GitHub', detail: 'Branching, PRs, Version tracking' },
      { name: 'Unity Engine', detail: '2D/3D physics, Game loops, C#' }
    ]
  }
];

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const filteredCategories = filter === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((cat) => cat.type === filter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="gold-divider"></div>
          <p className="section-intro">
            Comprehensive technical competencies acquired through coursework, labs, and hands-on application development.
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="filter-bar" role="toolbar" aria-label="Filter skills by category">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Skills
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'languages' ? 'active' : ''}`}
            onClick={() => setFilter('languages')}
          >
            Languages
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'web-mobile' ? 'active' : ''}`}
            onClick={() => setFilter('web-mobile')}
          >
            Web &amp; Mobile
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'core' ? 'active' : ''}`}
            onClick={() => setFilter('core')}
          >
            CS Core
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'tools' ? 'active' : ''}`}
            onClick={() => setFilter('tools')}
          >
            Tools
          </button>
        </div>

        <div className="skills-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.category} className="skill-category-card">
              <h3 className="category-heading">{cat.category}</h3>
              <ul className="skill-list">
                {cat.skills.map((s) => (
                  <li key={s.name} className="skill-item">
                    <span className="skill-bullet"></span>
                    <div className="skill-content">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-detail">{s.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
