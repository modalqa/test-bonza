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

          cy.get('.product_label').should('have.text', 'Products')

          //Add item
          cy.contains('ADD TO CART').click()

          //View Cart
          cy.get('.shopping_cart_container span').click();

          //Checkout
          cy.contains('CHECKOUT').click()

          cy.get('[data-test="firstName"]')
          .type('faris')
          .should('have.value', 'faris');

          cy.get('[data-test="lastName"]')
          .type('kurnia')
          .should('have.value', 'kurnia');

          cy.get('[data-test="postalCode"]')
          .type('12345')
          .should('have.value', '12345');

          cy.contains('CONTINUE').click()
          cy.wait(500)

          cy.contains('FINISH').click()
           
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
          cy.contains('ADD TO CART').click()

          //View Cart
          cy.get('.shopping_cart_container span').click();

          //Remove Item
          cy.contains('REMOVE').click()

          //Checkout
          cy.contains('CHECKOUT').click()

          
    })
})