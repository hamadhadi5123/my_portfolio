import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <span className="footer-brand">HAMAD ASGHAR</span>
          <span className="footer-degree">BS Computer Science &bull; Riphah International University</span>
        </div>

        <div className="footer-center">
          <p className="footer-copy">
            &copy; <span id="current-year">{currentYear}</span> Muhammad Hamad Asghar. Built with React 19, GSAP &amp; Vite.
          </p>
        </div>

        <div className="footer-right">
          <span className="footer-ci-badge">
            <span className="footer-ci-dot"></span> CI/CD Automated on GitHub Actions
          </span>
        </div>
      </div>
    </footer>
  );
}
