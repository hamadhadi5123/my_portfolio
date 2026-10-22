import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <p className="footer-copy">
          &copy; <span id="current-year">{currentYear}</span> Muhammad Hamad Asghar. Built with React, Vite &amp; Vanilla CSS.
        </p>
        <p className="footer-pipeline">
          Automated CI/CD build, syntax check, and smoke tests published to GitHub Pages.
        </p>
      </div>
    </footer>
  );
}
