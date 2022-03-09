// init.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Initial Cypress', () => {
    it('is working', () => { //Check is Cypress is working
      expect(true).to.equal(true)
    })
    it('visits the app', () => {
        cy.visit('http://localhost:4000')
      })
  })

