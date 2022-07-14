context("Deposit Panel", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.percySnapshot("Deposit panel");
  });

  it("can check Deposit panel", () => {
    cy.get("[data-cy=deposit-value]")
      .should("exist")
      .should("contain", "$71,249.07");

    cy.get("[data-cy=deposit-value]").should(
      "have.css",
      "color",
      "rgb(255, 0, 0)"
    );

    cy.get("[data-cy=view-balance-deposits-link]").should(
      "have.css",
      "display",
      "flex"
    );
    cy.get("[data-cy=view-balance-deposits-link]").should(
      "have.css",
      "justify-content",
      "flex-end"
    );
  });
});

