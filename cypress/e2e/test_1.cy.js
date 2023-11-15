describe('My First Test', () => {
    it('verify positive test', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com")
      cy.title().should('eq','OrangeHRM')
    })

    it.skip('verify negative test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq','OrangeHRM123')
      })
  })