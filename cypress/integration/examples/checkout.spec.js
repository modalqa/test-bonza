const url = "https://www.saucedemo.com/"

context('Checkout', () => {
    beforeEach(() => {
      cy.visit(url);
    });

    it('Add item and until finished checkout', () => {
   
        // Login
         cy.get('[data-test="username"]')
          .type('standard_user')
          .should('have.value', 'standard_user');

          cy.get('[data-test="password"]')
          .type('secret_sauce')
          .should('have.value', 'secret_sauce');

          cy.get('#login-button').click();

          cy.get('.title').should('have.text', 'Products')

          //Add item
          cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

          //View Cart
          cy.get('.shopping_cart_container span').click();

          //Checkout"
          cy.get('[data-test="checkout"]').click()

          cy.get('[data-test="firstName"]')
          .type('faris')
          .should('have.value', 'faris');

          cy.get('[data-test="lastName"]')
          .type('kurnia')
          .should('have.value', 'kurnia');

          cy.get('[data-test="postalCode"]')
          .type('12345')
          .should('have.value', '12345');

          cy.get('[data-test="continue"]').click()
          cy.wait(500)

          cy.get('[data-test="finish"]').click()
           
          //Verify text success checkout
          cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')

    })
    it('checkout without items in cart', () => {
   
        // Login
         cy.get('[data-test="username"]')
          .type('standard_user')
          .should('have.value', 'standard_user');

          cy.get('[data-test="password"]')
          .type('secret_sauce')
          .should('have.value', 'secret_sauce');

          cy.get('#login-button').click();

          //Add item
          cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

          //View Cart
          cy.get('.shopping_cart_container span').click();

          //Remove Item
          cy.get('[data-test="remove-sauce-labs-backpack"]').click()

          //Checkout
          cy.get('[data-test="checkout"]').click()

          
    })
})