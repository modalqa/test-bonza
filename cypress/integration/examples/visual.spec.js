
const url = "https://www.saucedemo.com/"

context('Visual', () => {
    beforeEach(() => {
      cy.visit(url);
    });

    it('Verify the color of the letter in the item name', () => {
        //Login
        cy.get('[data-test="username"]')
        .type('standard_user')
        .should('have.value', 'standard_user');

        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce');

        cy.get('#login-button').click();

        //Verify Font Color
        cy.get('.inventory_item_name').should('have.css', 'color', 'rgb(226, 35, 26)')
    })

    it('Show hover in the add to cart button', () => {
        //Login
        cy.get('[data-test="username"]')
        .type('standard_user')
        .should('have.value', 'standard_user');

        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce');

        cy.get('#login-button').click();

        //Hover
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').invoke('show')
        //cy.contains('ADD TO CART')// Assert that el is visible
       // cy.wrap({ foo: 'bar' }).its('foo').should('eq', 'bar')
    })
})