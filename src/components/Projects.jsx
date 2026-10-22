import React, { useState } from 'react';

const PROJECTS_DATA = [
  {
    id: 'datamind',
    title: 'DataMind FYP',
    category: 'Final Year Project',
    tagCategory: 'fyp',
    badge: 'FYP • In Development',
    description: 'Undergraduate capstone project currently under active development. Explores data-driven intelligence, pattern extraction, data processing pipelines, and analytical models.',
    tags: ['Python', 'Data Analytics', 'Machine Learning', 'Research & Dev'],
    highlight: true
  },
  {
    id: 'buddybills',
    title: 'Buddy Bills Mobile App',
    category: 'Mobile Application',
    tagCategory: 'mobile',
    badge: 'Mobile App',
    description: 'A shared expense splitting and balance management mobile app designed to help student groups and roommates transparently track collective expenditures and settle debts.',
    tags: ['Flutter', 'Dart', 'Firebase fundamentals', 'State Management'],
    highlight: false
  },
  {
    id: 'candycrush',
    title: 'Candy Crush Style Game',
    category: 'Game & Algorithms',
    tagCategory: 'games',
    badge: 'Game • PF & OOP',
    description: 'Grid-based tile matching puzzle game implementing 2D array matrix operations, cascade gravity drop logic, pattern matching checks, and score calculation.',
    tags: ['C++', 'DSA', 'OOP', 'Game Logic'],
    highlight: false
  },
  {
    id: 'hotelbooking',
    title: 'Hotel Room Booking System',
    category: 'Management System',
    tagCategory: 'systems',
    badge: 'Management System',
    description: 'Hospitality reservation system built to handle room tier categorization, guest booking requests, real-time check-in/out tracking, and persistent relational SQL records.',
    tags: ['Java', 'OOP', 'SQL', 'Database Management'],
    highlight: false
  },
  {
    id: 'cargame',
    title: 'Car Game using Unity',
    category: 'Game Development',
    tagCategory: 'games',
    badge: 'Game Development',
    description: '3D vehicle driving simulation developed with the Unity engine, featuring wheel collider physics simulation, user input controls, obstacle collisions, and track checkpoints.',
    tags: ['Unity', 'C# Scripting', 'Game Physics', '3D Navigation'],
    highlight: false
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.tagCategory === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio Work</span>
          <h2 className="section-title">Academic &amp; Lab Projects</h2>
          <div className="gold-divider"></div>
          <p className="section-intro">
            A curated collection of genuine academic coursework, mobile development, game algorithms, and ongoing final year capstone research.
          </p>
        </div>

        {/* Project Filter Toolbar */}
        <div className="filter-bar" role="toolbar" aria-label="Filter projects">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({PROJECTS_DATA.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'fyp' ? 'active' : ''}`}
            onClick={() => setFilter('fyp')}
          >
            Capstone FYP
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'games' ? 'active' : ''}`}
            onClick={() => setFilter('games')}
          >
            Games &amp; Physics
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'systems' ? 'active' : ''}`}
            onClick={() => setFilter('systems')}
          >
            Systems
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className={`project-card ${p.highlight ? 'highlight-card' : ''}`}
            >
              <div className={`card-badge ${p.id === 'datamind' ? 'in-dev' : ''}`}>
                {p.badge}
              </div>
              <h3 className="project-name">{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
