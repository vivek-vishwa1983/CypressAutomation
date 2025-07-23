// Test case TC01 - Verification of all component visible clearly in login page

describe('User Interface Verification', () => {
  it('should load login page with correct User Interface', () => {
    cy.visit('https://www.saucedemo.com/');  // Access website
    cy.title().should('eq', 'Swag Labs');  // Verifying the title of the page
    cy.get('[data-test="username"]').should('be.visible');  // Verifying username field is visible
    cy.get('[data-test="password"]').should('be.visible');  // Verifying password field is visible
    cy.get('[data-test="login-button"]').should('be.visible');  // Verifying login button is visible
   
  });
});

