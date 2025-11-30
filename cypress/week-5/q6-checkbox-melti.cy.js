//melti checkbox test

describe("melti checkbox test", () => {
  it("check melit checkbox", () => {
    cy.visit(" https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1").check().should("be.checked");
    cy.get("#checkBoxOption3").check().and("be.checked");
  });
});
