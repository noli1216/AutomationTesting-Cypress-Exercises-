//dropdown test

describe("dropdown test", () => {
  it("dropdown test", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // Select the dropdown element and choose an option
    cy.get("#dropdown-class-example")
      .select("Option2") // by visible text
      .should("have.value", "option2"); // verify value
  });
});
