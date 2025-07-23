describe('SauceDemo E2E - Add, Remove Products and Checkout', function () {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/');

    // Test Case TC18 - Verification of Continue shopping redirects to inventory page
 
    // Login using standard user
 cy.fixture('fixtures-demo/sauceCredentials').then((credentials) => {
     this.credentials = credentials;
    cy.get('[data-test="username"]').type(this.credentials.standardUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    });

    
    cy.url().should('include', '/inventory.html');
  });

  it('Add a product, add more products, remove some and complete the order', function () {
    
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Go to cart
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    // Click "Continue Shopping" button
    cy.get('[data-test="continue-shopping"]').click();

    //  Verify user is redirected to the inventory page
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });


  });
