import "cypress-iframe";

describe("Iframe Button Test", () => {
  it("Clicks button inside iframe and verifies message", () => {
    // Visit the main page
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Load the iframe
    cy.frameLoaded("#courses-iframe");

    // Click the Mentorship button inside the iframe
    cy.iframe().find("a[href*='mentorship']").first().click();

    // Verify the success message inside the iframe
    cy.iframe()
      .find("h1")
      .should("contain.text", "Get Personal Guidance from Rahul Shetty");
  });
});
