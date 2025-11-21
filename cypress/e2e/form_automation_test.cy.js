describe("Business Registration Form Automation", () => {
  it("fills and submits the form successfully", () => {
    // step 1 : visit the form page
    cy.visit("https://form.jotform.com/242354571450554");
    // cy.screenshot("");

    //step 2: fill out the form fields
    cy.get("#first_4").type("James");
    cy.get("#last_4").type("Bond");
    cy.get("#input_6").type(" Bond Company");
    cy.get("#input_12_full").type("(000) 000-0000");
    cy.get("#input_5").type("jbond@example.com");

    // Address Fields

    cy.get("#input_3_addr_line1").type("123 London Street");
    cy.get("#input_3_addr_line2").type("Apt 2");
    cy.get("#input_3_city").type("London");
    cy.get("#input_3_state").type("Maryland");
    cy.get("#input_3_postal").type(20902);

    // Step 3: Select Type of Business
    cy.get("#input_11").select("Store");

    // Step 4: Message
    cy.get("#input_8").type("This is a sample text.");

    // Step 5: Submit the form

    cy.get("#input_14").click()

  });
});

describe("About locator", () => {
  it("facebook login", () => {
    cy.visit("https://facebook.com");
    cy.get("#email").type("This is facebook")
    cy.get("#pass").type("This is facebook");
  });
});
