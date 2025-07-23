describe('SauceDemo - Verify logout prevents back navigation access', function () {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/');

    //Test Case TC20 - After logout, back button should not allow access to inventory page
   
   //  Login as standard user
    cy.fixture('fixtures-demo/sauceCredentials').then((credentials) => {
     this.credentials = credentials;
    cy.get('[data-test="username"]').type(this.credentials.standardUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    });

    
    cy.url().should('include', '/inventory.html');
  });

  it('should not allow access to inventory after logout using browser back button', function () {
    
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();

    // Confirm logout redirect
    cy.url().should('include', '/');

    // Simulate browser back navigation
    cy.go('back');

    // App should redirect to login, not allow inventory access
    cy.url().should('include', '/');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.contains('Accepted usernames are:').should('be.visible');
  });
});