import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'hobbies', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="#hero" className="brand-logo" aria-label="Hamad Asghar Homepage" onClick={closeMenu}>
          <span className="gold-text brand-initials">MHA</span>
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
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#hobbies"
                className={`nav-link ${activeSection === 'hobbies' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Interests
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link nav-cta ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
