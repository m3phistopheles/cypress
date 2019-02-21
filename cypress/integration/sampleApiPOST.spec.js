describe('Making calls to a sample POST API endpoint', function() {
   var result 
    
    it('should submit a successful post and log the response in the console', function() {
       result =  cy.request({
            method: 'POST',
            url: 'http://dummy.restapiexample.com/api/v1/create',
            body: {
                name: 'vero',
                salary: '55.55',
                age: '31',
                id: '42'
            }
        })
        result.its('body')
              .its('name')
              .should('include', 'vero');
    })
})