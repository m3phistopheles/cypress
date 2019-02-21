describe('Making calls to a sample POST API endpoint', function() {
    
    it('should submit a successful post and log the response in the console', function() {
        cy.request({
            method: 'POST',
            url: 'http://dummy.restapiexample.com/api/v1/create',
            body: {
                name: 'vero',
                salary: '55.55',
                age: '31',
                id: '42'
            }
        }).then((response) => {
            cy.log(response.body)
        })
    })
})