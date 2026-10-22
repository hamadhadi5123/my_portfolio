import React, { useState } from 'react';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  const email = 'muhammadhamadasghar@gmail.com';
  const phone = '0344-7971027';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const temp = document.createElement('input');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      setCopyStatus('Email address copied to clipboard!');
      setTimeout(() => setCopyStatus(''), 3000);
    } catch {
      setCopyStatus(`Direct email: ${email}`);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Communication</span>
          <h2 className="section-title">Contact &amp; Connect</h2>
          <div className="gold-divider"></div>
          <p className="section-intro">
            Open to software engineering collaborations, academic discussions, and technical inquiries.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-card">
            <h3 className="contact-card-title">Get in Touch Directly</h3>
            <p className="contact-disclaimer">
              This portfolio uses standard direct client communications. No background servers, unverified forms, or third-party message interceptors are used.
            </p>

            <div className="contact-methods">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href={`mailto:${email}`} className="contact-link gold-text" id="email-link">
                  {email}
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href={`tel:${phone.replace(/-/g, '')}`} className="contact-link gold-text">
                  {phone}
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">GitHub:</span>
                <a
                  href="https://github.com/hamadhadi5123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link gold-text"
                >
                  github.com/hamadhadi5123
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-plain">
                  Jhoke Malkani, Tehsil Paharpur, Dist. D.I. Khan, Pakistan
                </span>
              </div>
            </div>

            <div className="contact-actions">
              <a href={`mailto:${email}`} className="btn btn-primary">
                Compose Email
              </a>
              <button
                type="button"
                id="copy-email-btn"
                className="btn btn-secondary"
                onClick={handleCopyEmail}
              >
                Copy Email Address
              </button>
            </div>

            {copyStatus && (
              <p id="copy-status" className="copy-status" role="status" aria-live="polite">
                {copyStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
