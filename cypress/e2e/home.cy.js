describe('visitando a pagina inicial', () => {
  it('web app deve estar online', () => {
    cy.visit('/')
    cy.title('').should('eq','Gerencie suas tarefas com Mark L')
  })
})