describe('SauceDemo E2E - Add, Remove Products and Checkout', function () {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/');

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
    // Test Case TC15 - Add a single product
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Test Case TC16 - Add multiple products
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // Go to cart
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    // Test Case TC17 - Remove one product
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();

    // Test Case TC 19 - Complete full checkout flow with valid information
    // Proceed to checkout
    
    cy.get('[data-test="checkout"]').click();

    // Fill in checkout information
    cy.get('[data-test="firstName"]').type('Vivek');
    cy.get('[data-test="lastName"]').type('Vishwakarma');
    cy.get('[data-test="postalCode"]').type('L-3816');
    cy.get('[data-test="continue"]').click();

    // Verify checkout overview page
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.summary_info').should('exist');

    // Finish order
    cy.get('[data-test="finish"]').click();

    // Verify order completion
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
  });
});