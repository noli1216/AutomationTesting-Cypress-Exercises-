//rerun..... flaky test
describe(
  "Login Page Flaky Test",
  {
    retries: {
      runMode: 1,
      openMode: 1,
    },
  },
  () => {
    it("checks for login form after delay", () => {
      cy.visit("https://practice.expandtesting.com/login");

      // Flaky element
      cy.get("#newForm", { timeout: 4000 })
        .should("be.visible")
        .and("contain", "Email");
    });
  }
);
