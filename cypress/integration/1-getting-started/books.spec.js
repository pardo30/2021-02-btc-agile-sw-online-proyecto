describe('Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4000')
    })
  
    it('it focuses the input', () => {
      cy.focused().should('have.class', 'title-form')
    })

    it('accepts input', () => {
        const input = "Title 1 Test"
        cy.get('.title-form')
          .type(input)
          .should('have.value', input)
      })
    
      it('adds a new todo', () => {
        const input = "Learn about cypress"
        cy.get('.form-control')
          .type(input)
          .type('{enter}')
          .get('li')
          .should('have.length', 3)
      })
  })