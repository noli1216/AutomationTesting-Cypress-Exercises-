describe("Checkbox Enable/Disable Test", () => {
  it("toggles and checks the checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .invoke("attr", "disabled", true)
      .should("be.disabled")
      .invoke("removeAttr", "disabled")
      .and("be.enabled")
      .check()
      .and("be.checked");
  });
});
