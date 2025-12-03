// Selector
describe("Exercise 1: Selectors", () => {
  it("Locate using ID, Class, and Attribute selectors", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    //by class
    cy.get(":nth-child(1) > .form-control").type("Kebe");
    //by Id
    cy.get(":nth-child(2) > .form-control").type("example@gmail.com");
    //by Id
    cy.get("#exampleInputPassword1").type("gdhgjsd");
    //by Id
    cy.get("#exampleCheck1").check();
    //by Id
    cy.get("#exampleFormControlSelect1").select("Female");
    //by Id
    cy.get("#inlineRadio1").check().should("be.checked");
    //by Attribute
    cy.get('form input[name="bday"]').type("2025-06-23");
    cy.get(".btn").click();
  });
});
