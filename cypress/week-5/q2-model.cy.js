// Exercise 2: Modal Window Visibility Test
describe("Modal Test", () => {
  it("checks modal is hidden, then visible after click", () => {
    cy.visit("https://demoqa.com/modal-dialogs");

    cy.get("#example-modal-sizes-title-sm").should("not.exist"); // hidden
    cy.get("#showSmallModal").click(); // open

    cy.get(".modal-content").should("be.visible"); // visible
    cy.get("#example-modal-sizes-title-sm").should("contain", "Small Modal");

    cy.get("#closeSmallModal").click(); // close
    cy.get("#example-modal-sizes-title-sm").should("not.exist"); // hidden again
  });
});
