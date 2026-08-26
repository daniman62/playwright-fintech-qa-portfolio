# Fintech QA Engineering Portfolio

A Software Quality Engineering portfolio demonstrating practical QA strategy, test automation, cross-browser testing, CI/CD, traceability, and maintainable test architecture using **Playwright and TypeScript**.

This project is designed to demonstrate not only how automated tests are implemented, but also how QA activities connect requirements, test planning, traceability, test execution, and continuous integration.

> **Note:** This portfolio uses public testing applications and fictional test scenarios. No proprietary client information, source code, credentials, or business rules are included.

---

## 👋 About This Project

I am a Software Quality Assurance professional with experience across banking, fintech, and online gaming (also known as iGaming) environments.

I created this portfolio to demonstrate and continue developing my technical Quality Engineering skills, particularly in:

- Playwright
- TypeScript
- Test Automation
- Page Object Model
- API Testing
- Data-driven Testing and Fixtures
- Cross-Browser Testing
- CI/CD
- QA Strategy
- Requirements Traceability
- AI-Assisted Quality Engineering

The objective is to combine traditional QA practices with modern Quality Engineering and automation approaches.

---

## 🛠 Tech Stack

| Area | Technology |
|---|---|
| UI Automation Framework | Playwright |
| API Testing | Playwright APIRequestContext |
| Programming Language | TypeScript |
| Runtime | Node.js |
| Test Architecture | Page Object Model |
| Test Data | Reusable fixtures |
| CI/CD | GitHub Actions |
| Version Control | Git / GitHub |
| IDE | Visual Studio Code |
| Browsers | Chromium, Firefox, WebKit |

---

## 🧪 Current Test Coverage

The current automated suite covers UI testing using SauceDemo and REST API testing using JSONPlaceholder.

### UI Authentication Coverage
| Test ID | Scenario | Type | Automated |
|---|---|---|---|
| AUTH-001 | Valid user login | Positive | ✅ |
| AUTH-002 | Invalid password | Negative | ✅ |
| AUTH-003 | Missing password | Negative | ✅ |
| AUTH-004 | Locked-out user | Negative | ✅ |
| AUTH-005 | User logout | Functional | ✅ |

### UI Checkout Coverage
| Test ID | Scenario | Type | Automated |
|---|---|---|---|
| E2E-001 | Valid user must be able to complete a purchase | Positive E2E | ✅ |
| E2E-002 | Checkout with missing First Name | Negative E2E | ✅ |
| E2E-003 | Checkout with missing Last Name | Negative E2E | ✅ |
| E2E-004 | Checkout with missing ZIP/Postal Code | Negative E2E | ✅ |


All scenarios are currently executed across:

- Chromium
- Firefox
- WebKit

This results in **9 UI scenarios × 3 browser engines = 27 automated cross-browser test executions** across the current UI regression suite.

### API Coverage
| Test ID | Scenario | Type | Automated |
|---|---|---|---|
| API-001 | Retrieve a valid user | Positive GET | ✅ |
| API-002 | Create a new user | Positive POST | ✅ |
| API-003 | Request a non-existing user | Negative | ✅ |
| API-004 | Validate user response structure and data types | Contract Validation | ✅ |

API scenarios are executed once through the dedicated Playwright API project.

### Current Regression Suite
27 UI executions + 4 API scenarios = 31 automated test executions ✅

---

## 🏗 Project Structure

```text
playwright-fintech-qa-portfolio/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── docs/
│   ├── test-cases.md
│   ├── test-plan.md
│   └── traceability-matrix.md
│
├── fixtures/
│   └── test-data.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── api/
│   │   └── users-api.spec.ts
│   │
│   └── ui/
│       ├── authentication.spec.ts
│       └── checkout.spec.ts
│
├── .gitattributes
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

### Structure Overview

- **`.github/workflows/`** – GitHub Actions workflow used to execute the automated regression suite in CI.
- **`docs/`** – QA documentation including the test plan, manual test cases, and requirements traceability matrix.
- **`fixtures/`** – Centralized reusable test data and data-driven scenario definitions.
- **`pages/`** – Page Object Model classes that encapsulate UI locators and reusable page interactions.
- **`tests/api/`** – REST API automated tests implemented with Playwright `APIRequestContext`.
- **`tests/ui/`** – Cross-browser UI automation covering authentication and end-to-end checkout workflows.
- **`playwright.config.ts`** – Playwright configuration for browser projects, API execution, reporting, retries, and CI behavior.

---

## 🧩 Test Architecture

The automation framework follows a layered architecture designed to separate test scenarios, page interactions, reusable test data, and execution configuration.

The current architecture includes:

- Page Object Model (POM)
- UI test specifications
- API test specifications
- Reusable test-data fixtures
- Data-driven test scenarios
- Cross-browser execution
- Dedicated UI and API Playwright projects
- Continuous Integration through GitHub Actions

### Page Object Model

The project uses the **Page Object Model (POM)** to separate test logic from UI implementation details.

Each Page Object is responsible for the locators and reusable interactions associated with a specific area of the application.

#### `LoginPage.ts`

The Login Page Object manages:

- Login page navigation
- Username input
- Password input
- Login button
- Authentication error messages
- Reusable login behavior

Instead of repeatedly implementing login actions directly inside each test:

```typescript
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
```

tests can use the reusable Page Object method:

```typescript
await loginPage.login('standard_user', 'secret_sauce');
```

#### `InventoryPage.ts`

The Inventory Page Object manages interactions with the product inventory, including:

- Application menu
- Logout functionality
- Product selection
- Adding the Sauce Labs Bike Light to the shopping cart
- Shopping cart access
- Shopping cart badge validation

#### `CartPage.ts`

The Cart Page Object manages the shopping-cart stage of the purchase workflow, including:

- Selected product identification
- Cart-content validation
- Checkout initiation

#### `CheckoutPage.ts`

The Checkout Page Object manages the checkout and order-completion workflow, including:

- First Name input
- Last Name input
- ZIP/Postal Code input
- Checkout validation error messages
- Continue action
- Order overview product validation
- Finish action
- Order confirmation message

This separation allows the automated tests to describe the **business workflow** while the Page Objects manage the underlying UI interactions and selectors.

The approach improves:

- Maintainability
- Reusability
- Test readability
- Separation of responsibilities
- Selector management
- Scalability as automation coverage grows

---

### UI Test Layer

UI test specifications are stored under:

`tests/ui/`

The current UI layer contains:

#### `authentication.spec.ts`

Covers authentication behavior including:

- Successful login
- Invalid password
- Missing password
- Locked-out user
- Logout

Negative authentication scenarios use reusable data-driven definitions.

#### `checkout.spec.ts`

Covers the end-to-end purchase workflow including:

- Product selection
- Shopping cart validation
- Checkout initiation
- Customer information entry
- Order overview validation
- Successful purchase completion
- Required First Name validation
- Required Last Name validation
- Required ZIP/Postal Code validation

UI scenarios execute across:

- Chromium
- Firefox
- WebKit

This provides cross-browser validation of the application's critical user workflows.

---

### API Test Layer

API test specifications are stored under:

`tests/api/`

The current API suite uses Playwright's `APIRequestContext` to validate REST API behavior independently from browser execution.

Current coverage includes:

- GET requests
- POST requests
- HTTP status-code validation
- Positive scenarios
- Negative scenarios
- Response-body validation
- Response structure validation
- Data-type validation

API tests execute through a dedicated Playwright API project, preventing them from being unnecessarily repeated across browser projects.

---

### Test Data and Fixtures

Reusable test data is centralized under:

`fixtures/`

The `test-data.ts` file contains reusable datasets for:

- Valid authentication credentials
- Invalid authentication credentials
- Missing authentication data
- Checkout customer information
- Product information
- Negative checkout scenarios
- Expected validation messages

Centralizing test data reduces hardcoded values inside test specifications and improves maintainability as coverage grows.

It also separates:

**Test logic → Test data → UI implementation**

---

### Data-Driven Testing

The framework uses data-driven testing for scenarios that share the same execution flow but require different inputs and expected results.

This approach is currently used for:

- Negative authentication scenarios
- Negative checkout validation scenarios

For example, checkout validation scenarios define:

- Test ID
- Scenario name
- First Name
- Last Name
- Postal Code
- Expected validation message

The Playwright test dynamically generates individual test scenarios from these datasets.

Conceptually:

```text
Reusable Test Data
        ↓
Scenario Dataset
        ↓
Shared Test Logic
        ↓
Multiple Independent Tests
```

This reduces duplicated automation code while preserving individual test identification and reporting.

Adding another validation scenario can therefore require primarily adding another dataset instead of duplicating the complete checkout workflow.

---

### End-to-End Workflow Architecture

The checkout automation demonstrates interaction across multiple Page Objects as part of a single business workflow:

```text
LoginPage
    ↓
InventoryPage
    ↓
CartPage
    ↓
CheckoutPage
    ↓
Confirmation Validation
```

The automated E2E flow validates:

```text
Authentication
    ↓
Product Selection
    ↓
Cart Validation
    ↓
Checkout
    ↓
Customer Information
    ↓
Order Overview
    ↓
Purchase Completion
```

This allows the portfolio to demonstrate automation of a complete transactional workflow rather than isolated page-level tests.

---

### Execution Architecture

Playwright uses separate projects for UI and API execution.

```text
Playwright Test
      │
      ├── UI Projects
      │     ├── Chromium
      │     ├── Firefox
      │     └── WebKit
      │
      └── API Project
            └── REST API Tests
```

The current suite contains:

```text
9 UI scenarios × 3 browsers = 27 UI executions
4 API scenarios × 1 API project = 4 API executions

Total = 31 automated executions
```

This same regression suite can be executed locally and through the GitHub Actions CI pipeline.

---

## 🔄 Continuous Integration

The project uses **GitHub Actions** to automatically execute the Playwright regression suite whenever changes are pushed to the repository.

The current CI workflow:

1. Checks out the repository.
2. Configures the Node.js environment.
3. Installs project dependencies.
4. Installs Playwright browsers.
5. Executes UI tests across supported browsers.
6. Executes API tests through the dedicated API project.
7. Generates the Playwright test report.
8. Uploads the report as a workflow artifact.

The automated suite currently executes against:

- Chromium
- Firefox
- WebKit

### Current CI Result

**31 automated test executions passing successfully: 27 UI executions across Chromium, Firefox and WebKit, plus 4 API executions through the dedicated API project.** ✅

Current distribution:

```text
9 UI scenarios
×
3 browser engines
=
27 UI executions

4 API scenarios
×
1 API project
=
4 API executions

Total = 31 automated executions
```

This provides continuous validation that changes committed to the repository do not break the existing regression suite.

---

## 🌐 Cross-Browser and API Project Configuration

Playwright is configured with separate projects for UI and API testing.

### UI Projects
- Chromium
- Firefox
- WebKit

UI tests are matched from:

`tests/ui/`

### API Project

API tests are executed through a dedicated project and matched from:

`tests/api/`

This prevents API scenarios from being unnecessarily executed once per browser.

---

## 📋 QA Documentation

The repository includes QA documentation associated with the automated scenarios.

### Test Plan

The test plan defines:

- Testing objectives
- Scope
- Included and excluded functionality
- Test types
- Supported browsers
- Automation approach
- Quality risks
- Entry criteria
- Exit criteria

See: [`docs/test-plan.md`](docs/test-plan.md)

### Requirements Traceability Matrix

The traceability matrix connects requirements with their corresponding test scenarios and automation status.

See: [`docs/traceability-matrix.md`](docs/traceability-matrix.md)

### Test Cases

The test case documentation contains the functional scenarios represented by the automated regression suite.

See: [`docs/test-cases.md`](docs/test-cases.md)

This creates traceability between:

**Requirement → Test Case → Automated Test → Execution Result**

---

## 🤖 AI-Assisted Quality Engineering

As this portfolio evolves, it will also demonstrate the responsible use of **Large Language Models (LLMs)** as assistants throughout the QA lifecycle.

Examples include:

- Requirements analysis
- Test scenario brainstorming
- Edge-case identification
- Test case generation
- Test data suggestions
- Playwright and TypeScript code assistance
- Test refactoring
- QA documentation
- Regression-suite maintenance

AI-generated suggestions are reviewed and validated before being incorporated into the testing strategy or automation implementation.

The goal is to use AI as an **engineering assistant**, while maintaining human ownership of:

- QA strategy
- Risk analysis
- Test coverage decisions
- Code review
- Validation
- Final quality decisions

A dedicated AI-assisted testing workflow and documentation will be added as the portfolio develops.

---

## ▶️ Running the Tests

### Prerequisites

Before running the project locally, make sure the following are installed:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/daniman62/playwright-fintech-qa-portfolio.git
```

Navigate to the project:

```bash
cd playwright-fintech-qa-portfolio
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Run All Tests

```bash
npx playwright test
```

### Run Authentication Tests Only

```bash
npx playwright test tests/ui/authentication.spec.ts
```

### Run API Tests Only

```bash
npx playwright test tests/api/users-api.spec.ts
```

### Run Checkout Tests Only

```bash
npx playwright test tests/ui/checkout.spec.ts
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### Open Playwright UI Mode

```bash
npx playwright test --ui
```

### View the HTML Report

After executing the tests:

```bash
npx playwright show-report
```

---

## 🌐 Cross-Browser Testing

Playwright is currently configured to execute the test suite against three browser engines:

| Browser Project | Engine |
|---|---|
| Chromium | Chromium |
| Firefox | Firefox |
| WebKit | WebKit |

With the current authentication and Checkout/E2E scenarios:

```text
5 Authentication scenarios
+ 4 Checkout/E2E scenarios
=
9 UI scenarios

9 UI scenarios
×
3 browser engines
=
27 automated UI executions
```

Cross-browser execution is performed both locally and through the GitHub Actions CI pipeline.

```text
5 Authentication scenarios
+ 4 Checkout/E2E scenarios
+ 4 API scenarios
= 13 logical automated scenarios
```

### Execution count:

```text
15 Authentication
+ 12 Checkout
+ 4 API
= 31 executions
```

---

## 🗺 Project Roadmap

### Completed

- [x] GitHub repository setup
- [x] Playwright + TypeScript configuration
- [x] Authentication automation
- [x] Positive authentication testing
- [x] Negative authentication testing
- [x] Locked-user validation
- [x] Logout validation
- [x] Page Object Model implementation
- [x] Shared test setup using `beforeEach`
- [x] Cross-browser testing
- [x] GitHub Actions CI pipeline
- [x] Automated Playwright reporting
- [x] Authentication test plan
- [x] Requirements traceability matrix
- [x] Documented authentication test cases
- [x] Playwright API testing
- [x] GET API validation
- [x] POST API validation
- [x] Negative API testing
- [x] API response structure validation
- [x] Separate UI and API Playwright projects
- [x] Reusable test-data fixtures
- [x] Data-driven testing
- [x] Checkout / transaction workflow automation
- [x] Negative Checkout validation automation

### In Progress

- [ ] Additional Checkout / transaction workflow automation

### Planned

- [ ] Additional API scenarios
- [ ] API schema validation
- [ ] Environment configuration
- [ ] Environment-specific test data management
- [ ] API/UI integration scenarios
- [ ] Sample defect reports
- [ ] AI-assisted testing documentation
- [ ] AI-assisted requirement-to-test workflow
- [ ] Expanded CI/CD reporting
- [ ] Additional regression coverage

---

## 🔐 Data & Confidentiality

This repository is intended exclusively as a professional QA Engineering portfolio.

All scenarios use:

- Publicly available testing applications
- Public test credentials
- Fictional requirements
- Fictional business scenarios
- Non-sensitive test data

The repository does **not** contain:

- Employer source code
- Client source code
- Confidential documentation
- Production credentials
- Customer information
- Proprietary business rules
- Banking customer data

This allows the project to demonstrate real-world QA practices without exposing confidential information from professional environments.

---

## 🎯 Portfolio Objective

This repository is an evolving **Quality Engineering portfolio** focused on demonstrating the complete QA lifecycle rather than automation code alone.

The project connects:

**Requirements → Test Strategy → Traceability → Test Cases → Automation → Execution → CI/CD → Continuous Improvement**

The long-term objective is to expand the repository toward scenarios representative of modern **fintech and digital-platform Quality Engineering**, including UI automation, API testing, CI/CD, risk-based testing, and responsible AI-assisted QA practices.

---

## 📈 Current Status

**UI Automation**

- 9 automated scenarios
- 3 browser engines
- 27 cross-browser executions

**API Automation**

- 4 automated API scenarios
- Positive and negative coverage
- GET and POST validation
- Response structure and data-type validation

**Framework**

- Page Object Model implemented across authentication and checkout workflows
- Reusable test-data fixtures implemented
- Data-driven authentication and checkout validation implemented
- End-to-end transactional workflow implemented
- Dedicated UI and API Playwright projects
- Cross-browser execution across Chromium, Firefox, and WebKit
- GitHub Actions CI enabled
- QA documentation and traceability implemented

**Regression Status**

- 31 automated executions currently **PASSING** ✅

---

## 📄 License

This project is available under the MIT License.

See the [`LICENSE`](LICENSE) file for additional information.
