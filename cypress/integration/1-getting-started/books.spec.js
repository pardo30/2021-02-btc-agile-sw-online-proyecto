const { notDeepEqual } = require("assert")

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
    
      it('adds a new book', () => {
        const inputTitle = "Title about Cypress"
        const inputAuthors = "Author 1"
        const inputYear = 2007
        cy.get('.title-form')
          .type(inputTitle)
          .get('.authors-form')
          .type(inputAuthors)
          .get('.year-form')
          .type(inputYear)
          .get('.add-button').click()
          //Check if the book has been created
          .get('.title-list')
          .contains(inputTitle)
      })

      it('Get more info', ()=> {
      cy.get('.info-button').first().click({ multiple: true })
        .get('.info-detail')
        .should('exist')   
      })

      it('Close more info', ()=> {
        cy.get('.info-button').first().click({ multiple: true })
          .get('.close-detail').click()
          .get('div').not('.info-detail') 
        })

      it('Edit book', ()=> {
        const newInputTitle = "New title about Cypress"
        cy.get('.edit-button').first().click({ multiple: true })
          .get('.title-form')
          .clear()
          .type(newInputTitle)
          .get('.edit-form-button').click()
          .get('.title-list')
          .contains(newInputTitle)
      })
      
      it('Delete book', ()=> {
        const newInputTitle = "New title about Cypress"
        cy.get('.delete-button').first().click()
        cy.on('window:confirm', () => true)
          .get('.title-list').should('not.exist')
      })
  })