import LoginPage from "../pages/loginPage";

describe("POM Login Test", () => {
  // Create an object/instance of the LoginPage class
  const loginPage = new LoginPage();

  it("should login successfully", () => {
    loginPage.visit();
    loginPage.enterEmail("practice");
    loginPage.enterPassword("SuperSecretPassword!");
    loginPage.submit();

    //assertation

    cy.url().should("include", "/secure");
  });
});
