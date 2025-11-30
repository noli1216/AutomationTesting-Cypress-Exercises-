describe("Select checkbox by name", () => {
  it("Selects the checkbox for the row containing 'John'", () => {
    cy.visit("https://vinothqaacademy.com/webtable/"); // Open the table page

    cy.contains("td", "John") // Find the cell with 'John'
      .parent() // Go to the row
      .find("input[type='checkbox']") // Locate checkbox in that row
      .check() // Select checkbox
      .should("be.checked"); // Verify selection
  });
});
