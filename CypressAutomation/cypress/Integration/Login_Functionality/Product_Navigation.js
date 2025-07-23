describe('Product Navigation Test', function () {
  beforeEach(function () {
    // Visit the site and log in
    cy.visit('https://www.saucedemo.com/');
    
    // Test Case TC11 - Login using standard credentials
cy.visit('https://www.saucedemo.com/');

    cy.fixture('fixtures-demo/sauceCredentials').then((credentials) => {
     this.credentials = credentials;
    cy.get('[data-test="username"]').type(this.credentials.standardUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();

    // Ensure we're on the inventory page
    cy.url().should('include', '/inventory.html');
  });
});
    // Test Case TC12 - product navigates to product details page
  it('should navigate to product details page when a product is clicked', function () {
    // Click on the first product title
    cy.get('.inventory_item').first().find('.inventory_item_name').click();

    
    cy.url().should('include', '/inventory-item.html');

    // Test Case TC13 - All Products and details load successfully
    cy.get('.inventory_details_name').should('be.visible');
    cy.get('.inventory_details_desc').should('be.visible');
    cy.get('.inventory_details_price').should('be.visible');
    

    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  });
});