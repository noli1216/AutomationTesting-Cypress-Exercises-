describe("Handling Dropdown with Hover", () => {
  it("Shows submenu on hover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/"); // Open page

    cy.get(".mouse-hover-content")
      .invoke("show") // Force hover menu to appear
      .should("be.visible"); // Confirm menu is visible

    cy.contains("Top").should("be.visible"); // Verify submenu item
    cy.contains("Reload").should("be.visible"); // Verify submenu item
  });
});
