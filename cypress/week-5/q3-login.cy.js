// Exercise 3: Invalid Login Error + Valid Login Success

describe("Login Error and Successful Login Test", () => {
  it("shows error for invalid login, then logs in successfully", () => {
    // Visit login page
    cy.visit("https://practicetestautomation.com/practice-test-login/");

    // Invalid login
    cy.get("#username").type("invalid");
    cy.get("#password").type("invalid");
    cy.get("#submit").click();
    cy.get("#error").should("be.visible");

    // Valid login
    cy.get("#username").clear().type("student");
    cy.get("#password").clear().type("Password123");
    cy.get("#submit").click();

    // Success check
    cy.url().should("include", "logged-in-successfully");
    cy.contains("Congratulations").should("be.visible");
  });
});
