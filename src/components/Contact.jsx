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
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Start a Conversation</h2>
          <div className="accent-bar"></div>
          <p className="section-intro">
            Have a project, academic collaboration, or software opportunity in mind? Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-editorial-card">
          <div className="contact-card-inner">
            <h3 className="contact-main-heading">Get in touch directly</h3>
            <p className="contact-note">
              Direct communication via authenticated client channels. No unverified third-party form handler required.
            </p>

            <div className="contact-details-grid">
              <div className="contact-pill-item">
                <span className="pill-item-label">Email</span>
                <a href={`mailto:${email}`} className="pill-item-value" id="email-link">
                  {email}
                </a>
              </div>

              <div className="contact-pill-item">
                <span className="pill-item-label">Phone</span>
                <a href={`tel:${phone.replace(/-/g, '')}`} className="pill-item-value">
                  {phone}
                </a>
              </div>

              <div className="contact-pill-item">
                <span className="pill-item-label">GitHub</span>
                <a
                  href="https://github.com/hamadhadi5123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-item-value"
                >
                  github.com/hamadhadi5123
                </a>
              </div>

              <div className="contact-pill-item">
                <span className="pill-item-label">Location</span>
                <span className="pill-item-value">
                  Jhoke Malkani, Tehsil Paharpur, Dist. D.I. Khan, Pakistan
                </span>
              </div>
            </div>

            <div className="contact-btn-row">
              <a href={`mailto:${email}`} className="btn btn-pill-dark">
                Compose Email
              </a>
              <button
                type="button"
                id="copy-email-btn"
                className="btn btn-pill-outline"
                onClick={handleCopyEmail}
              >
                Copy Email Address
              </button>
            </div>

            {copyStatus && (
              <p id="copy-status" className="copy-feedback-msg" role="status" aria-live="polite">
                {copyStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
