**Test Strategy Overview**

This Cypress automation project for
[**SauceDemo**](https://www.saucedemo.com) is designed to simulate
real-world QA practices with a focus on **functionality**,
**usability**, **browser compatibility**, and **session behavior**.

### **Test Objective** {#test-objective .unnumbered}

To test through Cypress the fundamental user flows of this SauceDemo
eCommerce site to make sure that the site behaves properly with respect
to different scenarios and browsers.

### **Scope of Testing** {#scope-of-testing .unnumbered}

**Functional Coverage:**

- Login (positive and negative scenarios)

- Product sorting (Name A--Z, Z--A, Price Low--High, High--Low)

- Add/remove multiple products to/from cart

- Cart behavior and product details validation

- Continue Shopping button redirection

- Post-logout browser back button restrictions

**Cross Browser Coverage:**

- Validation of login page rendering across Chrome, Firefox, and Edge

**UI Validation:**

- Fields visible and correctly labeled

- Page title

**Session Handling:**

- Do not allow to go back to secure pages after logout

### **Project technologies:**  {#project-technologies .unnumbered}

### JavaScript as programming language

### Node.js as runtime environment {#node.js-as-runtime-environment}

### Cypress as automation framework for web applications

### Google Chrome as test browser

###  {#section .unnumbered}

### **Assumptions:** {#assumptions .unnumbered}

- Consider the application under test (https://www.saucedemo.com) as a
  stable demo environment for test automation practice.

- Valid credentials (standard_user / secret_sauce) always get users
  logged in except for environment change scenarios.

- Product listings, sorting behavior, and cart actions remain static and
  consistent between sessions.

###  **Limitations:** {#limitations .unnumbered}

- No API-level testing will be performed (only UI automation with
  Cypress will be done).

- No performance/load testing is considered.

- It is a static test demo --- Hence, some edge cases from the real
  world (i.e., payment flows or user registration) are not possible or
  testable.

- It is assumed that the tests are in English language setup, and test
  scenario cases for responsiveness or internationalization are not
  considered.

- In case of any unexpected change in the structure or behavior of the
  demo site, the tests will likely break.

###  **Security & Session Tests**: {#security-session-tests .unnumbered}

- Session Timeout Handling - Simulate session expiration and test
  auto-redirection to login.

**Project Structure:**

![](media/image1.png){width="6.495833333333334in"
height="4.991666666666666in"}

**My Goals with This Project:**

Build assurance when using modern testing tools such as Cypress. --
Incorporate relevant industry testing parameters such as sorting
validation, field masking, and session security. -- Create a logical and
scalable testing structure with organized folders and files. -- Give a
complete and professional-looking automation suite that adheres to the
QA processes and standards. -- This project demonstrates the passion I
have for QA as well as the efforts I am making to evolve as a Test
Automation Engineer.
