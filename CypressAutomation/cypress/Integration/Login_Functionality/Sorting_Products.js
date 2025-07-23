  describe('fixture demo', function () {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/');  //Login into website

    cy.fixture('fixtures-demo/sauceCredentials').then((credentials) => {
     this.credentials = credentials;
    cy.get('[data-test="username"]').type(this.credentials.standardUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    });
  });

  // Test Case 14 - Sorting products by name A-Z, Z-A, price Low-High, 
  
  // High-LowSort Procucts by Name from A to Z alphabetic sequence
    it('should sort products by Name (A to Z)', () => {
    cy.get('[class="product_sort_container"]').select('Name (A to Z)');

    cy.get('.inventory_item_name').then(($items) => {
      const names = [...$items].map((item) => item.innerText);
      const sortedNames = [...names].sort();
      expect(names).to.deep.equal(sortedNames);
    });
  });

  //Sort Procucts by name from Z to A alphabetic sequence
  it('should sort products by Name (Z to A)', () => {
    cy.get('[class="product_sort_container"]').select('Name (Z to A)');

    cy.get('.inventory_item_name').then(($items) => {
      const names = [...$items].map((item) => item.innerText);
      const sortedNames = [...names].sort().reverse();
      expect(names).to.deep.equal(sortedNames);
    });
  });

  //Sort products by price low to high
  it('should sort products by Price (low to high)', () => {
    cy.get('[class="product_sort_container"]').select('Price (low to high)');

    cy.get('.inventory_item_price').then(($prices) => {
      const priceValues = [...$prices].map((el) =>
        parseFloat(el.innerText.replace('$', ''))
      );
      const sortedPrices = [...priceValues].sort((a, b) => a - b);
      expect(priceValues).to.deep.equal(sortedPrices);
    });
  });

  //Sort Products by high to Low
  it('should sort products by Price (high to low)', () => {
    cy.get('[class="product_sort_container"]').select('Price (high to low)');

    cy.get('.inventory_item_price').then(($prices) => {
      const priceValues = [...$prices].map((el) =>
        parseFloat(el.innerText.replace('$', ''))
      );
      const sortedPrices = [...priceValues].sort((a, b) => b - a);
      expect(priceValues).to.deep.equal(sortedPrices);
    });
  });
});

