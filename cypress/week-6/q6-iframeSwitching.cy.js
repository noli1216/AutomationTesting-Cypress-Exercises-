import "cypress-iframe";

describe("Main Page and iFrame Interaction", () => {
  it("should interact with iframe and return to main page", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Main page interaction
    cy.get("#name").type("Test User");

    // Inside iframe
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").first().click();
    cy.iframe().find("h1").should("contain.text", "Get Personal Guidance");

    // Back to main page
    cy.get("#checkBoxOption1").check().should("be.checked");
    cy.get("#alertbtn").click();

    cy.on("window:alert", (txt) => {
      expect(txt).to.include("Hello Test User");
    });
  });
});
