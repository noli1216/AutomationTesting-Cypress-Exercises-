describe("Login with Multiple Users from Fixture", () => {
  beforeEach(function () {
    cy.fixture("multipleUsers").as("data"); // load fixture and store in alias
  });

  it("logs in for multiple users", function () {
    this.data.forEach((element) => {
      cy.visit("https://rahulshettyacademy.com/loginpagePractise/");

      cy.log(`Testing login for: ${element.username}`);

      // Enter credentials
      cy.get("#username").clear().type(element.username);
      cy.get("#password").clear().type(element.password);

      // Login
      cy.get("#signInBtn").click();

      cy.wait(2000);

      // Validate login success (only for valid users)
      cy.url().then((url) => {
        if (url.includes("/shop")) {
          cy.get("nav.navbar").should("contain.text", "ProtoCommerce");

          // Logout after successful login
          cy.get(".nav-link.btn.btn-primary").click();
        } else {
          cy.log(`Login failed for user: ${element.username}`);
        }
      });
    });
  });
});
