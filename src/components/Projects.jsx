import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const PROJECTS_DATA = [
  {
    id: 'datamind',
    title: 'DataMind FYP',
    category: 'Final Year Capstone',
    tagCategory: 'fyp',
    badge: 'FYP • In Development',
    description: 'Undergraduate capstone project currently under active development. Explores data-driven intelligence, pattern identification, automated preprocessing pipelines, and predictive analytics models.',
    tags: ['Python', 'Data Analytics', 'Machine Learning', 'Research & Dev'],
    highlight: true
  },
  {
    id: 'buddybills',
    title: 'Buddy Bills Mobile App',
    category: 'Mobile Application',
    tagCategory: 'mobile',
    badge: 'Mobile App',
    description: 'A shared expense tracking and bill splitting application created with Flutter, Dart, and Firebase to help roommates and student groups balance ledgers and divide recurring liabilities transparently.',
    tags: ['Flutter', 'Dart', 'Firebase fundamentals', 'State Management'],
    highlight: false
  },
  {
    id: 'candycrush',
    title: 'Candy Crush Style Game',
    category: 'Game & Algorithms',
    tagCategory: 'games',
    badge: 'Game • PF & OOP',
    description: 'Grid-based tile matching game written in C++ implementing two-dimensional array matrix manipulations, pattern match validation, tile cascade drop mechanics, and score tracking.',
    tags: ['C++', 'DSA', 'OOP', 'Game Logic'],
    highlight: false
  },
  {
    id: 'hotelbooking',
    title: 'Hotel Room Booking System',
    category: 'Management System',
    tagCategory: 'systems',
    badge: 'Management System',
    description: 'Java object-oriented reservation system managing room tier categorization, guest booking requests, real-time check-in and check-out status updates, and relational SQL database records.',
    tags: ['Java', 'OOP', 'SQL', 'Database Management'],
    highlight: false
  },
  {
    id: 'cargame',
    title: 'Car Game using Unity',
    category: 'Game Development',
    tagCategory: 'games',
    badge: 'Game Development',
    description: 'Interactive 3D vehicle driving simulation developed with the Unity engine, featuring wheel collider physics simulation, custom vehicle input handling, obstacle hazards, and track checkpoints.',
    tags: ['Unity', 'C# Scripting', 'Game Physics', '3D Navigation'],
    highlight: false
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [filter]);

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.tagCategory === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio Work</span>
          <h2 className="section-title">Selected Projects</h2>
          <div className="accent-bar"></div>
          <p className="section-intro">
            A curated portfolio of honest academic coursework, mobile development, algorithmic games, and ongoing final year capstone research.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-pill-bar" role="toolbar" aria-label="Filter projects">
          <button
            type="button"
            className={`pill-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work ({PROJECTS_DATA.length})
          </button>
          <button
            type="button"
            className={`pill-tab ${filter === 'fyp' ? 'active' : ''}`}
            onClick={() => setFilter('fyp')}
          >
            Capstone FYP
          </button>
          <button
            type="button"
            className={`pill-tab ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
          </button>
          <button
            type="button"
            className={`pill-tab ${filter === 'games' ? 'active' : ''}`}
            onClick={() => setFilter('games')}
          >
            Games &amp; Physics
          </button>
          <button
            type="button"
            className={`pill-tab ${filter === 'systems' ? 'active' : ''}`}
            onClick={() => setFilter('systems')}
          >
            Systems
          </button>
        </div>

        <div className="projects-grid" ref={listRef}>
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className={`project-card ${p.highlight ? 'is-highlighted' : ''}`}
            >
              <div className="project-card-header">
                <span className={`project-badge ${p.id === 'datamind' ? 'badge-fyp' : ''}`}>
                  {p.badge}
                </span>
                <span className="project-category-name">{p.category}</span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
