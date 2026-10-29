import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#hero" className="brand-logo" aria-label="Hamad Asghar Homepage" onClick={closeMenu}>
          <span className="brand-title">HAMAD</span>
          <span className="brand-dot">.</span>
        </a>

        <button
          id="nav-toggle"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>

        <nav id="primary-nav" className={`nav-menu ${isOpen ? 'is-open' : ''}`} aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="nav-link" onClick={closeMenu}>
                Education
              </a>
            </li>
            <li>
              <a href="#hobbies" className="nav-link" onClick={closeMenu}>
                Interests
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-cta-wrapper">
          <a href="#contact" className="btn btn-pill-dark btn-header-cta" onClick={closeMenu}>
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
