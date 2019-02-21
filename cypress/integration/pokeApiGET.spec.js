describe('Making test calls to pokeAPI endpoints ', function () {
    var result

    it('should validate the berry flavors header ', function() {
        result = cy.request({
            method: 'GET',
            url: '/berry-flavor/5/'
        })
        result.its('headers')
              .its('content-type')
              .should('include', 'application/json')
    })

    it('should use baseUrl to call pokeAPI endpoint for charmander. This will log the json response into the debug console and verify that the response status is successful', function () {
        cy.request({
            method:'GET', 
            url: '/pokemon/4'
        }).then((response) => {
            cy.log(response.body)
            assert.equal(response.status, 200);
            expect(response.body).to.not.be.null;
        })
    })

    it('should call the bulbasaur stats as a cypress environment and verify the amount of moves available', function() {
        result = cy.request({
             method: 'GET',
             url: Cypress.env('bulbasaurStats')
         })
        result.its('body.moves')
            .should('have.length', 66);
    })

    it('should save information related to psyduck into a json file ', function() {
        cy.request({
            method: 'GET',
            url: '/pokemon/54'
        }).then((response) => {
            cy.writeFile('/cypress/fixtures/psyduckStats.json', response.body)
        })
        cy.readFile('/cypress/fixtures/psyduckStats.json')
        cy.expect('/cypress/fixtures/psyduckStats.json').to.not.be.null;
    })
})
