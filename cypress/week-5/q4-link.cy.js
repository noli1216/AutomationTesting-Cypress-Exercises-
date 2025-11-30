describe("Shop link test", () => {
  it("checks Shop link goes to /shop", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.contains("Shop").should("have.attr", "href").and("include", "shop");
  });
});
