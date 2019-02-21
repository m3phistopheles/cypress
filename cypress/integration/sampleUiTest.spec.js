describe('This is an example UI test suite', function(){

    it('should add a mechanical keyboard to the cart', function()
    {
        cy.visit('www.mechanicalkeyboards.com')
       cy.get('.dropdown.sf-with-ul').click()
        cy.get('.owl-next').click()
        //cy.get('input[name=btnK]').click()
    })
})