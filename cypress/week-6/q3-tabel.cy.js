describe("Dynamic Web Table with Pagination", () => {
  it("Find 'Rice' across pages and validate its row", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    const item = "Rice";

    function searchItem() {
      cy.get("tr td:nth-child(1)").then(($cells) => {
        const names = [...$cells].map((el) => el.innerText);

        if (names.includes(item)) {
          cy.log(`Item "${item}" found`);

          cy.contains("td", item)
            .parent()
            .within(() => {
              cy.get("td").eq(0).should("have.text", "Rice"); // Item
              cy.get("td").eq(1).invoke("text").should("match", /\d+/); // Price
              cy.get("td").eq(2).invoke("text").should("match", /\d+/); // Discount
            });
        } else {
          // If Next button disabled → item not found
          cy.get("[aria-label='Next']").then(($next) => {
            if ($next.attr("aria-disabled") === "true") {
              throw new Error("Item not found in any page");
            }

            cy.get("[aria-label='Next']").click();
            searchItem(); // Recursive call
          });
        }
      });
    }

    searchItem();
  });
});
