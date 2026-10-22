/**
 * Portfolio Client Script
 * Muhammad Hamad Asghar - BS Computer Science Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initNavObserver();
  initCopyEmail();
  initYear();
});

/**
 * Mobile Navigation Toggle and Accessibility Controls
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
  }

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-open');
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking any nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Close when clicking outside of nav
  document.addEventListener('click', (event) => {
    if (
      navMenu.classList.contains('is-open') &&
      !navMenu.contains(event.target) &&
      !toggleBtn.contains(event.target)
    ) {
      closeMenu();
    }
  });
}

/**
 * Active Navigation Indicator using IntersectionObserver
 */
function initNavObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Copy Email Address with User Feedback
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailLink = document.getElementById('email-link');
  const copyStatus = document.getElementById('copy-status');

  if (!copyBtn || !emailLink || !copyStatus) return;

  copyBtn.addEventListener('click', async () => {
    const email = emailLink.textContent.trim();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      copyStatus.textContent = 'Email address copied to clipboard!';
      copyBtn.textContent = 'Copied!';

      setTimeout(() => {
        copyStatus.textContent = '';
        copyBtn.textContent = 'Copy Email Address';
      }, 3000);
    } catch {
      copyStatus.textContent = 'Unable to copy automatically. Please copy manually: ' + email;
    }
  });
}

/**
 * Set Dynamic Copyright Year
 */
function initYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
}
