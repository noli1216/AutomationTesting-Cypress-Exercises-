describe("Authentication Flow Using Before and After Hooks", () => {
  // BEFORE HOOK
  before(() => {
    cy.visit(" https://evangadi.com/auth/login");
   
    //cypress.env.json

    cy.get(
      ":nth-child(1) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1"
    ).type(Cypress.env("email"));
    cy.get(
      ":nth-child(2) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1"
    ).type(Cypress.env("password"));
    // Click login
    cy.get("._btn-primary_1dtki_1").click();
    cy.url().should("include", "/onboarding");
  });
  it("Dashboard elements should load correctly", () => {
    cy.get(
      "._header_1bpdi_1 > .container > :nth-child(1) > .d-flex > a > img"
    ).should("be.visible");
    cy.get(".container > .gap-md-5").should("exist");
  });
  after(() => {
    // Click logout (update selector as needed)
    cy.get("._header_1bpdi_1 > .container > :nth-child(1) > .d-flex > a > img").should("be.visible")
    

    // Assert logout success
    cy.url().should("include", "/onboarding");
    cy.get('[role="button"]').should("be.visible").click();
    // cy.get("_logout__container_nm1of_228").click()
    // cy.get(
    //   "#root > main > div > div._user-section__wrapper_nm1of_173 > div > div._logout__container_nm1of_228 > svg"
    // ).click()
  });
});
