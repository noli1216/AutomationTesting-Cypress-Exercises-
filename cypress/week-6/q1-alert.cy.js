describe("Handles JS Alert", () => {
     // Alert
  it("Handles JS Alert", () => {
    cy.visit("https://vinothqaacademy.com/alert-and-popup/");
    cy.on("window:alert", (alm) => {
      expect(alm).to.eq("I am an alert box!");
      return true;
    });
    cy.get(
      ".elementor-element-fc8696a > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button"
    ).click();
    cy.get("#demotwo").should("have.text", "You clicked on OK!");
  });

  //confirm

  it("Handles JS Confirm", () => {
    cy.visit("https://vinothqaacademy.com/alert-and-popup/ ");
    cy.on("window:confirm", (alm) => {
      expect(alm).to.eq("Confirm pop up with OK and Cancel button");
    });
    cy.get(
      ".elementor-element-01aedcf > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button"
    ).click();
    cy.get("#demo").should("have.text", "You clicked on OK!");
  });

  // Prompt

  it("Handles JS Prompt", () => {
    cy.visit("https://vinothqaacademy.com/alert-and-popup/");
    cy.window().then((win) => {
      cy.stub(win,"prompt").returns("Yes");
    });
    cy.get(
      ".elementor-element-d0c9145 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button"
    ).click();
    cy.get("#demoone").should("contain", "Thanks for Liking Automation");
  });
});
