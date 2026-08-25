# ⚖️ Aparajita Legal - AI-Powered Legal Intake & Portal

A production web portal engineered for **Aparajita Legal** (`aparajitalegal.in`). This system features static frontend architecture, Bar Council of India (BCI) Rule 36 compliance gating, a serverless cloud backend, and an **Agentic AI Legal Intake Triage Engine**.

## 🚀 Key Features

* **BCI Rule 36 Disclaimer Modal:** Enforces mandatory non-solicitation agreement using browser `localStorage` persistent state management.
* **Agentic AI Legal Triage Engine:** Uses Groq API (`llama-3.3-70b-versatile`) to classify unstructured legal queries into legal domains, score urgency (1–5), and identify probable Indian statutes.
* **Serverless Lead Pipeline:** Asynchronous `fetch()` POST handler routing structured JSON payloads to Google Apps Script.
* **Real-Time Dispatch System:** Triggers automated Gmail notifications and WhatsApp messages via the Twilio REST API upon intake.
* **Git-Backed Content Management:** Integrated with Decap CMS for non-technical article publishing at `/admin`.

## 🛠️ Tech Stack

* **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript (DOM Manipulation)
* **Hosting & DNS:** GitHub Pages Edge CDN mapped to custom GoDaddy DNS (`aparajitalegal.in`)
* **AI Engine:** Groq Cloud API / Meta Llama 3 Model Integration
* **Backend:** Google Apps Script (Serverless Endpoint)
* **Alert APIs:** Twilio WhatsApp Messaging API, Gmail API
* **CMS:** Decap CMS & Netlify Identity
* **Database (Optional):** Supabase (PostgreSQL)

## 📁 Repository Structure

```text
├── index.html       # Primary UI, Tailwind Layout & BCI Modal
├── app.js           # Client-side AI Triage Engine & API Submit Handler
├── admin/
│   ├── index.html   # Decap CMS Dashboard Entry
│   └── config.yml   # CMS Git-Backend Settings
└── README.md        # Technical Documentation
