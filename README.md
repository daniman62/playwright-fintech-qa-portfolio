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

## 🛠 Technology Stack

| Area | Technology |
|---|---|
| UI Automation Framework | Playwright |
| API Testing | Playwright APIRequestContext|
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

The current automated suite covers both UI and API testing using the SauceDemo testing application.

### UI Authentication Coverage
| Test ID | Scenario | Type | Automated |
|---|---|---|---|
| AUTH-001 | Valid user login | Positive | ✅ |
| AUTH-002 | Invalid password | Negative | ✅ |
| AUTH-003 | Missing password | Negative | ✅ |
| AUTH-004 | Locked-out user | Negative | ✅ |
| AUTH-005 | User logout | Functional | ✅ |
| API-001 | Retrieve a valid user | API | ✅ |
| API-002 | Create a new user | API | ✅ |
| API-003 | Request a non-existing user | API | ✅ |
| API-004 | Validate user response structure and data types | API | ✅ |

All scenarios are currently executed across:

- Chromium
- Firefox
- WebKit

This results in **5 UI scenarios x 3 browser engines = 15 automated cross-browser test executions** for the current authentication regression suite.

### API Coverage
| Test ID | Scenario | Type | Automated |
|---|---|---|---|
| API-001 | Retrieve a valid user | Positive GET | ✅ |
| API-002 | Create a new user | Positive POST | ✅ |
| API-003 | Request a non-existing user | Negative| ✅ |
| API-004 | Validate user response structure and data types | Contract Validation | ✅ |

API scenarios are executed once through the dedicated Playwright API project.

### Current Regression Suite
15 UI executions + 4 API scenarios = 19 automated test executions ✅

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
│   ├── test-plan.md
│   ├── traceability-matrix.md
│   └── test-cases.md
│
├── fixtures/
│   └── test-data.ts
│
├── pages/
│   ├── LoginPage.ts
│   └── InventoryPage.ts
│
├── tests/
│   ├── api/
│   │   └── users-api.spec.ts
│   │
│   └── ui/
│       └── authentication.spec.ts
│
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

## 🧩 Test Architecture

The project separates responsibilities across multiple layers.

### Page Objects

The project uses the **Page Object Model (POM)** to separate test logic from UI implementation details.

#### `LoginPage.ts`

The Login Page Object currently manages:

- Login page navigation
- Username input
- Password input
- Login button
- Authentication error messages
- Login behavior

#### `InventoryPage.ts`

The Inventory Page Object currently manages:

- Application menu
- Logout functionality

This architecture keeps selectors and UI interaction logic outside the test specifications.

For example, instead of repeatedly implementing login actions directly inside each test:

```typescript
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
```

the test can use the reusable Page Object method:

```typescript
await loginPage.login('standard_user', 'secret_sauce');
```

This approach improves:

- Maintainability
- Reusability
- Test readability
- Separation of responsibilities
- Scalability as the automation suite grows


### UI Tests

UI tests are stored under:

tests/ui/

These tests validate browser-based functionality and execute across Chromium, Firefox, and WebKit.


### API Tests

API tests are stored under:

tests/api/

They use Playwright's request capabilities to validate REST API behavior independently from browser execution.

The API suite currently covers:

- GET requests
- POST requests
- HTTP status-code validation
- Positive scenarios
- Negative scenarios
- Response-body validation
- Data-type validation


### Fixtures

Reusable test data is stored under:

fixtures/

This layer is intended to reduce duplicated hardcoded data and improve maintainability as the test suite grows.

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

**19 automated test executions passing successfully across all three supported browsers.** ✅

Current distribution:

5 UI scenarios
×
3 browser engines
=
15 UI executions

4 API scenarios
×
1 API project
=
4 API executions

Total = 19 automated executions

This provides continuous validation that changes committed to the repository do not break the existing regression suite.

---

## 🌐 Cross-Browser and API Project Configuration

Playwright is configured with separate projects for UI and API testing.

### UI Projects
Chromium
Firefox
WebKit

UI tests are matched from:

tests/ui/

### API Project

API tests are executed through a dedicated project and matched from:

tests/api/

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

With the current five authentication scenarios:

```text
5 test scenarios
×
3 browser engines
=
15 automated test executions
```

Cross-browser execution is performed both locally and through the GitHub Actions CI pipeline.

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

### In Progress

- [ ] Reusable test-data fixtures
- [ ] Data-driven testing
- [ ] Test data management

### Planned

- [ ] Checkout / transaction workflow automation
- [ ] Additional API scenarios
- [ ] API schema validation
- [ ] Environment configuration
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

- 5 automated authentication scenarios
- 3 browser engines
- 15 cross-browser executions

**API Automation**

- 4 automated API scenarios
- Positive and negative coverage
- GET and POST validation
- Response structure and data-type valid

**Framework**

- Page Object Model implemented
- Dedicated UI and API projects
- GitHub Actions CI enabled
- QA documentation implemented
- Reusable fixtures being introduced

**Regression Status**

- 19 automated executions currently **PASSING** ✅

---

## 📄 License

This project is available under the MIT License.

See the [`LICENSE`](LICENSE) file for additional information.
