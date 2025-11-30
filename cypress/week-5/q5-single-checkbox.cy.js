//checkbox test
describe("Checkbox test", () => {
  it("checks and unchecks a checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("input[value='option1']")
      .check()
      .should("be.checked")
      .uncheck()
      .and("not.be.checked");
  });
});
