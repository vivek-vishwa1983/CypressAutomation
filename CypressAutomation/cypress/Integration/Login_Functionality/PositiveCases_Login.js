describe('fixture demo', function () {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/');

    cy.fixture('fixtures-demo/sauceCredentials').then((credentials) => {
      this.credentials = credentials;
    });
  });

  // Test Case TC02 - login with standard_user and correct Password
  it('standard User', function () {
    cy.get('[data-test="username"]').type(this.credentials.standardUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  });

  // Test Case TC03 - login with locked_out_user and correct Password
  it('lockedUsername', function(){

    cy.get('[data-test="username"]').type(this.credentials.lockedUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
  });

    // Test Case TC04 - login with problem_user and correct Password
   it('problemUsername', function(){

    cy.get('[data-test="username"]').type(this.credentials.problemUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  });
   
    // Test Case TC05 - login with performance_glitch_user and correct Password
    it('performanceUsername', function(){

    cy.get('[data-test="username"]').type(this.credentials.performanceUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  });


    // Test Case TC06 - login with error_user and correct Password
    it('errorUsername', function(){

    cy.get('[data-test="username"]').type(this.credentials.errorUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  });

    // Test Case TC07 - login with visual_user and correct Password
   it('visualUsername', function(){

    cy.get('[data-test="username"]').type(this.credentials.visualUsername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  
  });

});
