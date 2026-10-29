# Muhammad Hamad Asghar — Software Portfolio & CI/CD Pipeline

![Portfolio pipeline](https://github.com/hamadhadi5123/my_portfolio/actions/workflows/pages.yml/badge.svg)

> **Live Website:** [https://hamadhadi5123.github.io/my_portfolio/](https://hamadhadi5123.github.io/my_portfolio/)  
> **Repository:** [https://github.com/hamadhadi5123/my_portfolio](https://github.com/hamadhadi5123/my_portfolio)  
> **AI Usage Documentation:** [AI-USAGE.md](./AI-USAGE.md)

---

## 1. Project Overview

This repository contains the professional portfolio and continuous integration/continuous deployment (CI/CD) pipeline for **Muhammad Hamad Asghar**, an undergraduate Computer Science student in the **7th semester** at **Riphah International University**.

The portfolio is implemented using modern **React 19, GSAP animation, and Vite**, styled with a luxury **NOVA editorial theme** (warm porcelain `#faf8f5`, deep charcoal `#121316`, and metallic gold `#b88628`), featuring an ambient looping video background and organic fluid blob aesthetics, published automatically to **GitHub Pages** via a two-job **GitHub Actions** workflow.

### Design & Architecture Highlights
- **NOVA Luxury Editorial Theme:** Warm porcelain canvas, crisp high-contrast typography, and gold accent styling inspired by modern high-end agency designs.
- **Ambient Looping Video Background:** High-performance local looping video (`hero-bg.mp4`) with smooth vignette overlay.
- **GSAP Animation Suite:** Staggered load entrance timeline, continuous organic floating blob breathing motion, mouse parallax tilt, and smooth filter tab animations.
- **Organic Fluid Blob Mask:** Custom curved silhouette housing Muhammad Hamad Asghar's authentic portrait layered with ambient motion and a live status badge.
- **Frontend Stack:** React 19 component hierarchy (`App`, `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Education`, `Hobbies`, `Contact`, `Footer`) bundled by Vite with `@vitejs/plugin-react` and `gsap`.
- **Semantic & Accessible:** Exactly one `<h1>` heading, semantic structural landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), keyboard focus indicators, and WCAG AA contrast.
- **Static Contract & Smoke Test Compatibility:** All key section IDs (`about`, `skills`, `projects`, `contact`, `education`) are preserved in static `index.html` within `#root`. As described in Section 20 of the lab manual, this guarantees that Vite's production build produces a `dist/index.html` that passes automated smoke tests (`npm test`) without requiring browser emulation.
- **Truthful Content:** Authentic academic, lab, and capstone projects from Muhammad Hamad Asghar's resume. Direct contact uses verified `mailto:` and `tel:` links with real phone (`0344-7971027`) and email (`muhammadhamadasghar@gmail.com`).

---

## 2. Featured Projects, Skills & Education

### Featured Projects
1. **DataMind FYP (In Development):** Final Year undergraduate capstone project researching automated data intelligence, machine learning patterns, and structured data analysis.
2. **Buddy Bills Mobile App:** Mobile application created with Flutter, Dart, and Firebase fundamentals to track and split shared living costs and group liabilities.
3. **Candy Crush Style Game:** C++ game (PF & OOP) applying two-dimensional arrays, data structures, tile cascade algorithms, and pattern matching mechanics.
4. **Hotel Room Booking System:** Java object-oriented management system integrated with SQL database records for room reservations, availability, and guest status tracking.
5. **Car Game using Unity:** Physics-driven vehicle simulation built in Unity with wheel collider physics, controller handling, and checkpoint loops.

### Core Technical Skills
- **Languages:** C++ (PF & OOP), Java, Python, Dart, JavaScript
- **Web & Mobile:** React.js, HTML5, CSS3, JavaScript fundamentals, Flutter, Firebase fundamentals, Mobile App Development
- **Computer Science Fundamentals:** Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Relational Databases (SQL), Problem Solving
- **Tools & Environments:** Git/GitHub, Unity Game Engine

### Education History
- **Bachelors - Computer Science (cont.):** 7th Semester (In Progress), Riphah International University
- **FSc - Pre-Medical (2021 – 2023):** BISE D.I. Khan Board
- **Matric - Science (2019 – 2021):** BISE D.I. Khan Board

### Personal Interests & Hobbies
- Coding, Cycling, Painting, Badminton, Cricket

---

## 3. Local Development & Testing Instructions (Windows PowerShell)

Ensure Node.js 24 LTS and Git are installed. In PowerShell, if `npm` execution policy restrictions apply, run using `npm.cmd`.

### Step 1: Install Dependencies
```powershell
npm.cmd ci
# If node_modules or lockfile are being initialized for the first time:
npm.cmd install
```

### Step 2: Run Development Server
```powershell
npm.cmd run dev
```
Open the local URL displayed in the terminal (typically `http://localhost:5173/portfolio-ci-cd/`).

### Step 3: Run Syntax Check
```powershell
npm.cmd run check
```
Verifies JavaScript syntax in `main.js` using Node's syntax validation engine (`node --check main.js`).

### Step 4: Build Production Bundle
```powershell
npm.cmd run build
```
Generates production-optimized static assets in the `dist/` folder using Vite.

### Step 5: Run Automated Smoke Tests
```powershell
npm.cmd test
```
Executes the smoke test suite in `tests/site.test.mjs` against `dist/index.html`.

### Step 6: Preview Production Build Locally
```powershell
npm.cmd run preview
```
Spins up a local web server serving the `dist/` directory at `/portfolio-ci-cd/` to verify production routing and assets.

---

## 4. CI/CD Pipeline Architecture

The automated pipeline is defined in `.github/workflows/pages.yml`. It runs on Ubuntu runners and consists of two distinct, decoupled jobs:

```
[ Push to main / PR / dispatch ]
               │
               ▼
┌──────────────────────────────┐
│          Job: build          │
│  - Checkout repository       │
│  - Set up Node.js 24         │
│  - npm ci                    │
│  - npm run check             │
│  - npm run build             │
│  - npm test                  │
└──────────────┬───────────────┘
               │ (Passes & on refs/heads/main only)
               ▼
┌──────────────────────────────┐
│  Upload Pages Artifact       │
│  (dist/ -> github-pages)     │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│         Job: deploy          │
│  - Configure Pages           │
│  - Deploy Pages Artifact     │
│  - Publish to public URL     │
└──────────────────────────────┘
```

### Pipeline Triggers
- `push` to `main`: Triggers build, tests, artifact upload, and automated deployment.
- `pull_request` targeting `main`: Triggers build, syntax check, and smoke tests to validate changes. **Deployment is deliberately skipped** on PRs to protect production.
- `workflow_dispatch`: Enables manual triggering from the GitHub Actions web interface.

### Branch Protection & Deployment Gating
The deployment job contains strict branch and event conditionals:
```yaml
if: github.event_name != 'pull_request' && github.ref == 'refs/heads/main'
needs: build
```
- **Why `needs: build` protects deployment:** If any step in the build job fails (syntax check, bundling, or smoke tests), the `deploy` job never executes, preventing broken code from reaching the live website.
- **Why PRs skip deployment:** Pull requests validate proposed code before merging. They do not overwrite the production website.
- **Separate Runners:** The `build` job uploads `dist/` as a Pages artifact (`actions/upload-pages-artifact@v3`). The `deploy` job downloads this artifact directly and publishes it (`actions/deploy-pages@v4`), eliminating the need to re-run checkout, install dependencies, or re-execute build commands on the deployment runner.

---

## 5. Automated Checks & Limitations

| Check | What It Validates | Limitations (What It Does NOT Establish) |
| :--- | :--- | :--- |
| **`npm run check`** | Syntax validity of root `main.js` | Does not verify logic errors, DOM interaction bugs, or runtime exceptions. |
| **`npm run build`** | Vite bundler resolution, file import integrity, and production asset creation | Does not guarantee CSS visual appeal, responsiveness, or cross-browser fidelity. |
| **Metadata Test** | Presence of `<title>`, `<meta name="viewport">`, and `<meta name="description">` | Does not evaluate SEO copywriting quality or social OpenGraph tags. |
| **Section ID Test** | Static presence of required section IDs: `about`, `skills`, `projects`, `contact` | Does not check semantic content quality or whether the content is truthful. |
| **Local Asset Test** | Direct relative assets exist in `dist/` and match `/portfolio-ci-cd/` base | Does not check external HTTP links or dynamically injected media. |

---

## 6. Submission Evidence Log

Use this table to record your repository links, commit SHAs, and Actions run URLs before submission:

| Evidence Item | URL or Reference | Commit SHA |
| :--- | :--- | :--- |
| **Repository URL** | `https://github.com/hamadhadi5123/my_portfolio` | N/A |
| **Public Website URL** | `https://hamadhadi5123.github.io/my_portfolio/` | N/A |
| **First Successful `main` Deployment Run** | *(Paste Actions Run URL here)* | *(Paste Commit SHA)* |
| **Visible Update Deployed Automatically** | *(Paste Actions Run URL here)* | *(Paste Commit SHA)* |
| **Failed Pull Request Run** | *(Paste PR Run URL showing failed test)* | *(Paste Commit SHA)* |
| **Repaired Pull Request Run** | *(Paste PR Run URL showing passing test)* | *(Paste Commit SHA)* |
| **Successful Feature Pull Request** | *(Paste Merged PR URL)* | *(Paste Commit SHA)* |
| **Resulting `main` Deployment Run** | *(Paste Actions Run URL after merge)* | *(Paste Commit SHA)* |
| **Rollback (`revert` commits)** | *(Paste Actions Run URL for revert)* | *(Reverted SHA & Revert SHA)* |

---

## 7. Reflection & Viva Answers

### 1. What is the difference between a repository URL and a GitHub Pages URL?
The repository URL (`https://github.com/username/portfolio-ci-cd`) hosts the Git version control repository, source files, branches, issues, and workflow definitions. The GitHub Pages URL (`https://username.github.io/portfolio-ci-cd/`) serves the compiled, public-facing static web files (`dist/`) generated by Vite over HTTPS to end users.

### 2. Why is `package-lock.json` committed while `node_modules` is ignored?
`node_modules` contains thousands of platform-dependent third-party dependency files which bloat repository history and can differ across operating systems. In contrast, `package-lock.json` is a lightweight manifest specifying exact versions, hashes, and dependency trees. Committing `package-lock.json` ensures deterministic builds across all local and remote CI runner environments.

### 3. What does `npm ci` do if the package files disagree?
`npm ci` (clean install) strictly validates `package.json` against `package-lock.json`. If dependencies or version constraints mismatch between the two files, `npm ci` immediately throws a fatal error and terminates without installing anything, preventing corrupted builds.

### 4. Why must the Vite base match the repository path?
GitHub Pages for project repositories serves content from a subdirectory (`https://username.github.io/portfolio-ci-cd/`). By setting `base: '/portfolio-ci-cd/'`, Vite prefixes all generated asset URLs (CSS, JavaScript, images) with `/portfolio-ci-cd/`. Without this, assets would be requested from the root domain (`/assets/...`), returning HTTP 404 errors.

### 5. What is the difference between a job, a step, and an action?
- **Job:** A distinct top-level execution unit that runs on a designated virtual machine runner (e.g. `ubuntu-latest`). Jobs execute independently and concurrently by default unless sequenced with `needs`.
- **Step:** An individual task within a job executed sequentially on that job's runner. A step can run shell commands (`run`) or call a reusable action (`uses`).
- **Action:** A pre-packaged, reusable automation module (e.g. `actions/checkout@v6` or `actions/deploy-pages@v4`) designed to perform a specific workflow capability.

### 6. How does `needs: build` protect the deployment job?
`needs: build` enforces an explicit dependency: the `deploy` job cannot start until the `build` job finishes with status `success`. If dependency installation fails, syntax checking fails, bundling errors occur, or smoke tests fail, the build job fails and the deploy job is automatically canceled/skipped, ensuring bad builds never reach production.

### 7. Why does a PR run skip artifact upload and deployment?
Pull requests represent untrusted or pending feature branches undergoing review and validation. Skipping artifact upload and deployment on PR events protects production from being overwritten by unapproved or unfinished changes while still allowing CI checks to validate the PR.

### 8. How do separate jobs transfer the generated website files?
Because each job runs on a separate, ephemeral virtual machine, local runner files are not shared directly. The `build` job packages the compiled `dist/` directory and uploads it using `actions/upload-pages-artifact@v3` to GitHub Pages internal storage. The `deploy` job then pulls that verified artifact directly using `actions/deploy-pages@v4`.

### 9. What do `pages: write` and `id-token: write` allow?
- `pages: write`: Grants the GitHub Actions runner authorization to publish new site content to the GitHub Pages service.
- `id-token: write`: Allows the runner to request an OpenID Connect (OIDC) JSON Web Token (JWT) from GitHub, enabling secure token-based authentication between Actions and GitHub Pages without static, long-lived access tokens.

### 10. Which problems can pass these smoke tests but still break the website?
- Subtle JavaScript runtime exceptions triggered only upon user interaction (such as unhandled null references inside event listeners).
- CSS rendering bugs, visual overlaps, or broken responsive layouts on specific mobile device viewports.
- Broken external hyperlinks or unresponsive external API endpoints.
- Visual contrast or color deficiencies not captured by DOM string regex matching.

### 11. What is the difference between blocking deployment and blocking a merge?
- **Blocking Deployment:** Managed by workflow conditionals (`needs: build`, branch check). It stops failed builds from being published to the live website, but the bad commit may still exist in the repository branch.
- **Blocking a Merge:** Managed by GitHub repository branch protection rules (e.g. requiring status checks to pass before merging). It prevents pull requests with failed checks from entering the `main` branch entirely.

### 12. How would you restore the last good content without rewriting history?
By using `git revert <commit-sha>`. This command creates a new, forward-moving commit that cleanly inverts the changes introduced by the flawed commit. This preserves complete historical traceability and triggers the standard CI/CD pipeline to deploy the restored state without destructive history rewriting (`git push --force`).
