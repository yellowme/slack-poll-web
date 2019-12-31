/// <reference types="Cypress" />

describe('Vehicle credit authorization flow', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should fill the poll correctly', () => {
    cy.fixture('poll').then((poll) => {
      cy.get('#title-input').clear().type(poll.title)

      poll.options.forEach(option => {
        cy.get('#add-option-input').clear().type(`${option}{enter}`)
      })

      cy.get('#options-list').children().should('have.length', poll.options.length)

      cy.get('#command-input').should('have.value', poll.expectedCommand)
    })
  })
})
