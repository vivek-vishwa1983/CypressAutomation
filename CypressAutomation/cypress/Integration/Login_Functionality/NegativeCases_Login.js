describe('fixture demo', function () {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/');

    cy.fixture('fixtures-demo/sauceCredentials').then((credentials) => {
      this.credentials = credentials;
    });
  });

  // Test Case TC08 - Login with Incorrect user name and incorrect Password
  it('IncorrectUserNamePwd', function(){

    cy.get('[data-test="username"]').type(this.credentials.dummyusername);
    cy.get('[data-test="password"]').type(this.credentials.dummypassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
   });

   // Test Case TC09 - Login with Incorrect User Name and Correct Password
   it('incorrectUserName', function(){

    cy.get('[data-test="username"]').type(this.credentials.dummyusername);
    cy.get('[data-test="password"]').type(this.credentials.systempassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
     });

   // Test Case TC10 - Login with Correct User Name and Incorrect Password
    it('Incorrectpwd', function(){

    cy.get('[data-test="username"]').type(this.credentials.standardUsername);
    cy.get('[data-test="password"]').type(this.credentials.dummypassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
  
   });
    
});
