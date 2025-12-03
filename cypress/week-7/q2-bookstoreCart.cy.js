describe("Bookstore cart functionality", () => {
  // Runs before each test: visit homepage and reset cart
  beforeEach(() => {
    cy.visit("https://practice.expandtesting.com/bookstore");
    cy.window().then((win) => {
      win.localStorage.removeItem("cart"); // clear cart
    });
  });

  it("cart starts empty", () => {
    cy.get(".badge") // select cart badge
      .should("be.visible") // must be visible
      .should("contain", " "); // contains empty/zero value
  });

  it("adding a book updates cart", () => {
    cy.contains("JavaScript for Web Developers") // find book by title
      .parent() // go to parent element
      .contains("Add To Cart") // find the add button
      .click(); // click to add

    cy.get(".badge") // check cart badge again
      .should("be.visible")
      .and("contain", "1"); // cart count updated
  });
});
