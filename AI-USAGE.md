# AI Usage Log

This document records the AI-assisted development workflow for the **Muhammad Hamad Asghar** portfolio project in accordance with course requirements.

---

## 1. Tool Details & Session Information

- **AI Tool / Assistant:** Antigravity (Gemini 3.8 Flash)
- **Role Adopted:** Senior Frontend Developer & UI/UX Designer
- **Date:** 2026-10-22
- **Project Name:** `portfolio-ci-cd`
- **Student Name:** Muhammad Hamad Asghar
- **Program & Affiliation:** Bachelor of Science in Computer Science (7th Semester), Riphah International University

---

## 2. Prompts Used

### Initial Prompt
```text
Act as a senior frontend developer and UI/UX designer. Build a complete professional portfolio for Muhammad Hamad Asghar, a BS Computer Science student at Riphah International University in the 7th semester. Use HTML, CSS, vanilla JavaScript and Vite. Include responsive dark charcoal and gold styling, hero, about, skills, projects, education, and contact sections. Required IDs: about, skills, projects, contact. Projects: Buddy Bills, Candy Crush Style Game, Hotel Room Booking System, Car Game using Unity, and DataMind FYP in development. Skills: C++, Java, Python, HTML, CSS, JavaScript fundamentals, Flutter, Dart, Firebase fundamentals, SQL, OOP, DSA, Git/GitHub, Unity, and problem solving. Do not invent achievements, links, work experience, or project features. Create index.html, style.css, main.js, vite.config.js with base '/portfolio-ci-cd/', package.json scripts for dev/check/build/test/preview, tests/site.test.mjs, AI-USAGE.md, README.md, and GitHub Actions workflow .github/workflows/pages.yml for build checks and GitHub Pages deployment. Keep required sections in static HTML, make it accessible and mobile responsive, use relative asset paths, and provide complete runnable code and Windows PowerShell instructions.
```

---

## 3. Key Changes & Architectural Decisions

1. **Static HTML First Architecture:**
   - All core content (hero, about, skills, projects, education, contact) resides directly in `index.html`. This ensures that automated smoke tests and headless test runners can parse and inspect DOM elements without requiring JavaScript execution or browser simulation.
   - Enforced exactly one `<h1>` (`Muhammad Hamad Asghar`) for strict semantic HTML and accessibility guidelines.

2. **Styling & Visual Design:**
   - Crafted a custom dark charcoal and metallic gold theme using native CSS custom properties.
   - Designed responsive cards for skills and projects with subtle gold borders and glow hover effects.
   - Implemented high-contrast text ratios conforming to WCAG AA accessibility standards and high-visibility keyboard focus rings (`:focus-visible`).

3. **Client-Side Interactions (`main.js`):**
   - Added accessible mobile navigation toggling with proper `aria-expanded` and `aria-controls` updates, escape key listener, and outside-click dismissal.
   - Implemented active section highlighting using native `IntersectionObserver` with fallback.
   - Added a client-side clipboard copy utility for the contact email address with live feedback.
   - Automated copyright year update via standard DOM methods.

4. **Honest Scope & Integrity:**
   - Projects are truthfully described without inflated claims or fabricated features.
   - Academic projects (Candy Crush style game in C++, Hotel Booking in Java/SQL, Car Game in Unity) and ongoing capstone work (DataMind FYP) are explicitly categorized.
   - Direct communication uses native `mailto:` links; no misleading contact form mockups are presented.

5. **CI/CD Automation Contract:**
   - Configured `vite.config.js` with `base: '/portfolio-ci-cd/'` to match the target repository subpath on GitHub Pages.
   - Implemented an automated smoke test suite in `tests/site.test.mjs` checking production metadata, mandatory section IDs (`about`, `skills`, `projects`, `contact`), and build asset path validity.
   - Defined a 2-job GitHub Actions workflow (`build` and gated `deploy`) in `.github/workflows/pages.yml`.

---

## 4. Problems Identified & Corrected

| Problem Identified | Root Cause | Correction Made |
| :--- | :--- | :--- |
| **Risk of Missing Test Sections** | Dynamic JavaScript rendering hides sections from raw HTML inspection | Kept all four required section IDs (`about`, `skills`, `projects`, `contact`) directly in static `index.html`. |
| **Asset Path Mismatch on GitHub Pages** | Default Vite base is `'/'`, which breaks on project-level Pages (`/portfolio-ci-cd/`) | Configured `base: '/portfolio-ci-cd/'` in `vite.config.js` and synchronized the test runner's expected prefix. |
| **False Message Dispatch** | Traditional static templates use dummy forms claiming messages were sent | Replaced with direct `mailto:` link and an email copy helper button with clear honest disclaimer. |
| **Multiple `<h1>` Headings** | AI generators often place `<h1>` in each section | Restricted `<h1>` strictly to the Hero name heading; section titles use `<h2>` and cards use `<h3>`. |
| **Windows Execution Policy** | PowerShell blocks unsigned `npm.ps1` script on restricted policies | Utilized `npm.cmd` in Windows PowerShell and provided explicit guidance in documentation. |

---

## 5. Verification Checklist

- [x] All 4 required IDs (`about`, `skills`, `projects`, `contact`) present in static HTML.
- [x] Single `<h1>` element.
- [x] Script tag formatted as `<script type="module" src="./main.js"></script>`.
- [x] Relative stylesheet reference (`./style.css`).
- [x] Responsive layout with dark charcoal & gold theme verified.
- [x] Smoke tests (`tests/site.test.mjs`) pass against production build.
- [x] CI/CD workflow contains separate `build` and `deploy` jobs with proper branch gating.
