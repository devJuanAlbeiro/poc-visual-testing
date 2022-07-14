context("Deposit Panel", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.percySnapshot("Deposit panel");
  });

  it("can check Deposit panel", () => {
    cy.get("[data-cy=deposit-value]")
      .should("exist")
      .should("contain", "$7,249.01");

    cy.get("[data-cy=deposit-value]").should(
      "have.css",
      "color",
      "rgba(0, 0, 0, 0.87)"
      // "rgb(255, 0, 0)"
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
