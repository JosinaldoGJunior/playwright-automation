## Automated E2E Testing with Playwright & TypeScript

Comprehensive end‑to‑end UI tests for a financial app using Playwright, TypeScript and the built‑in HTML reporter. This project follows best practices with environment variables and GitHub Actions CI/CD.

---

## 📑 Table of Contents

* [Overview](#overview)
* [Reports](#reports)
* [Features](#features)
* [Project Structure](#project-structure)
* [Technology Stack](#technology-stack)
* [Requirements](#requirements)
* [Installation](#installation)
* [Configuration](#configuration)
* [Running Tests](#running-tests)
* [CI/CD Pipeline](#cicd-pipeline)
* [Author](#author)
* [License](#license)

---

## 🔍 Overview

This project provides automated UI testing for a financial application using modern TypeScript testing tools. It demonstrates how to implement a comprehensive test suite with proper organization, and integrated reporting.

---

## 📊 Reports

After your test run, Playwright generates an HTML report under `playwright-report/`. You can:

1. **Open it locally**

   ```bash
   npx playwright show-report
   ```
2. **GitHub Pages** Visit the <a href="https://josinaldogjunior.github.io/playwright-automation/" target="_blank">GitHub Pages site</a> for the latest reports from CI/CD pipeline.

---

## 🏆 Features

* **Full E2E Coverage**: Login, create/edit/delete accounts, transactions & extract
* **Page‑Object Model**: Clean separation of UI logic
* **Custom Fixtures**: Inject page objects (`login`, `home`, `account`, `transaction`, `extract`, `toast`)
* **Built‑in HTML Reporter**: Screenshots, videos, trace viewer
* **Environment Variables**: `.env` support for credentials & base URL
* **Parallel Execution**: Leverage multiple CPU cores

---

## 🗂️ Project Structure

```
playwright-ts-financial/
├── tests/                              # All your `.spec.ts` files
│   └── e2e/
│       ├── account.spec.ts
│       ├── extract.spec.ts   
│       ├── login.spec.ts
│       └── transaction.spec.ts
├── pages/                              # Page‑Object classes
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   ├── AccountPage.ts
│   ├── TransactionPage.ts
│   ├── ExtractPage.ts
│   └── ToastPage.ts
├── support/
│   ├── fixtures/                       # Custom fixtures for Playwright
│   │   └── playwright‑fixtures.ts
│   └── utils/
│       └── transactionData.ts          # createTransactionData / createTransactionFixedData
├── locators.ts                         # Centralized CSS selectors
├── .env                                # API keys, credentials, base URL (ignored by Git)
├── .gitignore
├── playwright.config.ts                # Playwright config (headless, reporter, workers)
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ Technology Stack

* **TypeScript**: Static typing & modern JS
* **Playwright Test**: Cross‑browser automation
* **Node.js**: Runtime
* **GitHub Actions**: CI/CD pipeline

---

## 📋 Requirements

* Node.js 18+
* npm 9+
* Playwright Test 1.x
* A modern OS (Windows, macOS, Linux)
* Git

---

## 📥 Installation

1. **Clone**

   ```bash
   git clone <your‑repo‑url>
   cd playwright-ts-financial
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

---

## ⚙️ Configuration

1. **Create a `.env`** in project root:

   ```env
   EMAIL=your‑user@example.com
   PASSWORD=yourPassword
   BASE_URL=https://barrigareact.wcaquino.me/
   ```
2. **Check** `playwright.config.ts` to adjust `workers`, `headless` and reporter options.

---

## 🚀 Running Tests

* **All tests** (headless):

  ```bash
  npx playwright test
  ```
* **With report open**:

  ```bash
  npx playwright test --reporter=html && npx playwright show-report
  ```
* **Headed mode** (see browser):

  ```bash
  npx playwright test --headed
  ```

---

## 🔄 CI/CD Pipeline

We use **GitHub Actions**. Key points:

1. **Run** `npx playwright install` & `npx playwright test`
2. **Upload** `playwright-report/` as artifact
3. **Publish** static HTML via GitHub Pages or other host

```yaml
# .github/workflows/playwright.yml
name: Playwright CI

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: node-version: 18
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - name: Upload report artifact
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report
```

---

## 👤 Author

[Josinaldo Junior](https://github.com/josinaldogjunior)

---

## 📄 License

MIT © [Josinaldo Junior](https://github.com/josinaldogjunior)
