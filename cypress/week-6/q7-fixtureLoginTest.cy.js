describe("Login Using Fixture Data", () => {
  it("logs in with valid fixture credentials", () => {
    cy.fixture("loginData").then((data) => {
      // Load fixture data
      cy.visit("https://rahulshettyacademy.com/loginpagePractise/"); // Open login page

      cy.get("#username").type(data.username); // Enter username
      cy.get("#password").type(data.password); // Enter password
      cy.get("#signInBtn").click(); // Submit form

      cy.url().should("include", "/shop"); // Verify login success
    });
  });
});
