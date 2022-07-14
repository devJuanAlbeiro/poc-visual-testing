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

    cy.get("[data-cy=sale-amount-table-cell]").should(
      "have.css",
      "font-weight",
      "700"
    );
    cy.get("[data-cy=sale-amount-table-cell]").should(
      "have.css",
      "font-style",
      "italic"
    );
    cy.get("[data-cy=sale-amount-table-cell]").should(
      "have.css",
      "color",
      'rgb(0, 0, 255)'
    );
  })
})
