import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const SKILLS_DATA = [
  {
    category: 'Programming Languages',
    type: 'languages',
    skills: [
      { name: 'C++ Programming', detail: 'PF, OOP, Memory management' },
      { name: 'Java Programming', detail: 'Core OOP, Collections, Multithreading' },
      { name: 'Python Programming', detail: 'Scripting, Data handling, Analytics' },
      { name: 'Dart', detail: 'Mobile client logic & reactive state' },
      { name: 'JavaScript fundamentals', detail: 'Modern ES6+, Async & DOM' }
    ]
  },
  {
    category: 'Web & Mobile Ecosystem',
    type: 'web-mobile',
    skills: [
      { name: 'React.js', detail: 'Component design, Hooks, State lifecycle' },
      { name: 'Flutter & Dart', detail: 'Cross-platform native mobile apps' },
      { name: 'HTML5 & CSS3', detail: 'Semantic markup, Flexbox, CSS Grid' },
      { name: 'Firebase fundamentals', detail: 'Auth, Firestore, Cloud messaging' },
      { name: 'Mobile App Development', detail: 'State architecture & responsive UI' }
    ]
  },
  {
    category: 'Computer Science Core',
    type: 'core',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', detail: 'Inheritance, Polymorphism, Design' },
      { name: 'Data Structures & Algorithms (DSA)', detail: 'Trees, Graphs, Matrices, Sorting' },
      { name: 'Database Management & SQL', detail: 'Relational design, Queries, Normalization' },
      { name: 'Problem Solving', detail: 'Algorithmic optimization & structured debug' }
    ]
  },
  {
    category: 'Tools & Game Engines',
    type: 'tools',
    skills: [
      { name: 'Git & GitHub', detail: 'Version control, Branching, PRs' },
      { name: 'Unity Engine', detail: 'Physics, 2D/3D colliders, C# scripting' }
    ]
  }
];

export default function Skills() {
  const [filter, setFilter] = useState('all');
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [filter]);

  const filteredCategories = filter === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((cat) => cat.type === filter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competencies</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="accent-bar"></div>
          <p className="section-intro">
            Comprehensive technical competencies built through academic coursework, programming labs, and project implementations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-pill-bar" role="toolbar" aria-label="Filter skills by category">
          <button
            type="button"
            className={`pill-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Skills
          </button>
          <button
            type="button"
            className={`pill-tab ${filter === 'languages' ? 'active' : ''}`}
            onClick={() => setFilter('languages')}
          >
            Languages
          </button>
          <button
            type="button"
            className={`pill-tab ${filter === 'web-mobile' ? 'active' : ''}`}
            onClick={() => setFilter('web-mobile')}
          >
            Web &amp; Mobile
          </button>
          <button
            type="button"
            className={`pill-tab ${filter === 'core' ? 'active' : ''}`}
            onClick={() => setFilter('core')}
          >
            CS Core
          </button>
          <button
            type="button"
            className={`pill-tab ${filter === 'tools' ? 'active' : ''}`}
            onClick={() => setFilter('tools')}
          >
            Tools &amp; Unity
          </button>
        </div>

        <div className="skills-grid" ref={gridRef}>
          {filteredCategories.map((cat) => (
            <div key={cat.category} className="skill-category-card">
              <h3 className="category-heading">{cat.category}</h3>
              <ul className="skill-list">
                {cat.skills.map((s) => (
                  <li key={s.name} className="skill-item">
                    <span className="skill-dot"></span>
                    <div className="skill-meta">
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
