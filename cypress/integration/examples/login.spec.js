
const url = "https://www.saucedemo.com"

context('Login', () => {
    beforeEach(() => {
      cy.visit(url);
    });

    it('Login with registered users', () => {
   
        //Login
         cy.get('[data-test="username"]')
          .type('standard_user')
          .should('have.value', 'standard_user');

          cy.get('[data-test="password"]')
          .type('secret_sauce')
          .should('have.value', 'secret_sauce');

          cy.get('#login-button').click();

          cy.get('.title').should('have.text', 'Products')
    })
    it('login with unregistered user', () => {
   
      //Login
       cy.get('[data-test="username"]')
        .type('not_user')
        .should('have.value', 'not_user');

        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce');

        cy.get('#login-button').click();

        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

})