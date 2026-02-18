# AFRI — AI Frontend Regression Inspector

**AFRI (AI Frontend Regression Inspector)** is a developer-facing web application that compares screenshots from different frontend releases and uses **Google Gemini 2.5 Flash** to detect UI changes, summarize their impact, and evaluate them against **WCAG accessibility considerations**.

The goal is to explore how multimodal AI can assist with **visual regression analysis, accessibility review, and QA workflows**, while demonstrating best practices for AI integration, secure API usage, and thoughtful frontend architecture.

---

## Why AFRI?

Frontend regressions are often visual, subtle, and time-consuming to review manually. AFRI explores how modern multimodal models can assist by:

- Comparing two UI screenshots
- Identifying meaningful visual changes
- Highlighting affected areas
- Providing structured, machine-readable analysis
- Surfacing potential accessibility concerns
- Exporting analysis results for documentation and sharing

This project is designed as a **learning and portfolio project**, but is structured in a way that reflects how such a tool could fit into real QA or CI workflows.

---

## Core Features

- **AI-generated change detection** between baseline and new screenshots
- **Image comparison** using multimodal model input
- **Bounding box visualization** to highlight detected changes
- **Confidence scoring** for each detected change
- **Accessibility analysis** with WCAG-related heuristics
- **Structured JSON output** for predictable downstream usage
- **Server-side Gemini integration** to keep API keys secure
- **PDF export functionality** allowing users to download a report of detected changes and analysis results

---

## Recent Updates

### 🎨 Dark Theme Redesign

AFRI now uses a **darker UI theme**, improving:

- Visual comfort during extended usage
- Focus on inspection results
- Contrast between highlighted bounding boxes and the background

The darker palette reflects a developer-tool aesthetic and makes inspection overlays more visually prominent.

---

### 🧩 Layout Improvements

The page layout has been reorganized to improve clarity and flow:

- Clearer visual separation between:
  - Image comparison area
  - Highlight overlays
  - Structured AI summary
- Improved spacing and alignment for better scanability
- Stronger visual hierarchy for change summaries and confidence scores

These changes make the tool feel more like a focused inspection dashboard rather than a simple image comparison utility.

---

### 📄 PDF Report Download

Users can now **download a PDF report** containing:

- Summary of detected UI changes
- Confidence scores
- Accessibility-related observations
- Structured inspection results

This enables:

- Easy sharing with team members
- QA documentation
- Archiving regression analysis for release records
- Including results in pull requests or internal reports

The PDF export bridges experimentation with practical workflow usage.

---

## Tech Stack

### Frontend

- **React**
- **React Context** for state management
- Dynamic UI rendering based on AI response structure
- Client-side PDF generation for report export

### Backend

- **Serverless functions** (Vercel or Netlify)
- **Node.js runtime**
- Secure environment variable handling for API keys

### AI

- **Google Gemini 2.5 Flash**
- Multimodal (image + text) prompts
- Structured JSON responses for deterministic parsing

---

## Architecture Overview

At a high level:

- The client handles:
  - Image selection
  - Visualization and overlay rendering
  - Layout structure and theming
  - PDF generation

- The serverless backend:
  - Validates inputs
  - Calls the Gemini API using a server-side API key
  - Enforces structured output expectations

- The client renders AI results and visual overlays

All production Gemini API calls originate **server-side only**.

> Deployment and API key handling details are documented in `DEPLOYMENT.md`.

---

## Disclaimers

- **Not intended for large-scale production use**
- **Model output is probabilistic** and may vary between runs
- **Accessibility analysis is heuristic**, not a replacement for a formal accessibility audit or manual testing
- Results should be treated as **assistive insights**, not authoritative judgments

---

## Visuals

### Initial State (Before Image Upload)

The application starts in a neutral inspection state, allowing users to upload a baseline image and a new image for comparison.

![Initial state before images are uploaded](./docs/images/before_upload.png)

---

### Analysis in Progress (Loading State)

Once both images are provided, AFRI sends them to the server-side Gemini integration for analysis. During this phase, the UI reflects an active inspection state.

![Loading state while Gemini analyzes the images](./docs/images/loading-state.png)

---

### Analysis Results (Post-Inspection)

After the API returns:

- Detected changes are highlighted directly on the image using bounding boxes
- A structured summary below the images describes each change
- Users can download a PDF report of the inspection

![Analysis results with highlighted changes and summaries](./docs/images/results_screen.png)

---

## Why I Built This

I built AFRI to explore how modern multimodal AI models can augment frontend QA workflows — particularly in areas that are traditionally manual, visual, and subjective.

This project was an opportunity to:

- Work hands-on with Gemini’s multimodal capabilities
- Design prompts for structured, machine-readable output
- Think critically about AI reliability, accessibility, and UX impact
- Practice secure API integration and server-side architecture
- Improve frontend UX through iterative design (theming and layout refinement)
- Bridge AI output with practical workflow features like exportable reports

AFRI sits at the intersection of:

- **Frontend engineering**
- **QA & regression testing**
- **Accessibility awareness**
- **Applied AI integration**

---

## Author

### Wyatt Yousey
