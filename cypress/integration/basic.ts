it("should perform counter program", () => {
  cy.visit("http://localhost:8080");
  cy.get(".count-display").should("have.value", "10");

  cy.get(".plus-button").click();
  cy.get(".count-display").should("have.value", "11");
  cy.get(".plus-button").click();
  cy.get(".count-display").should("have.value", "12");
  cy.get(".plus-button").click();
  cy.get(".count-display").should("have.value", "12");

  cy.get(".minus-button").click();
  cy.get(".count-display").should("have.value", "11");
  cy.get(".minus-button").click();
  cy.get(".count-display").should("have.value", "10");
  cy.get(".minus-button").click();
  cy.get(".count-display").should("have.value", "9");
  cy.get(".minus-button").click();
  cy.get(".count-display").should("have.value", "8");
  cy.get(".minus-button").click();
  cy.get(".count-display").should("have.value", "8");
});
