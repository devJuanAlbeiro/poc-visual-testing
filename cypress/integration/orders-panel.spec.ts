context('Orders Panel', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.percySnapshot("Deposit panel");
  });

  it('can check Orders panel', () => {
    cy.get('[data-cy=custom-title]')
      .should('exist')
      .should('contain', 'Recent Orders')

    cy.get('[data-cy=custom-title]').should(
      'have.css',
      'color',
      'rgb(25, 118, 210)'
    )
  })
})
