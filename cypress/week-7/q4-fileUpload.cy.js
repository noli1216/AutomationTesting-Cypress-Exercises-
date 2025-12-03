describe("File Upload Test", () => {
  it("File Upload Test", () => {
    cy.visit("https://practice-automation.com/file-upload/");

    const fileName = "example.png";
    cy.get("#file-upload").attachFile(fileName);

    cy.get("#upload-btn").click();

    cy.get(".wpcf7-response-output").should(
      "contain",
      "Thank you for your message. It has been sent."
    );
  });
});

describe("File Download Test", () => {
  it("downloads a file", () => {
    cy.visit("https://practice-automation.com/file-download/");
    cy.get(
      ":nth-child(3) > .link-template-default > .card-body > .media > div.ml-3 > .wpdm-download-link"
    ).click();

    // const fileName2 = "test.pdf"
    cy.readFile("cypress/downloads/test.pdf").should("exist");
    

    // cy.get(
    //   ":nth-child(6) > .link-template-default > .card-body > .media > div.ml-3 > .wpdm-download-link"
    // ).click()
  });
});


  // // it("Multiple file upload", () => {
  //   cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
  //   cy.get("#filesToUpload").attachFile(["example.png", "lion.png"]);
  //   cy.get("#fileList > :nth-child(1)").should("contain", "example.png");
  // });

  // it("Drag and drop file upload", () => {
  //   cy.visit("https://CSS-tricks.com/examples/DragAndDropFileUploading/");
  //   cy.get(".box__input").attachFile("example.png", {
  //     subjectType: "drag-n-drop",
  //   });
  //   cy.get(".box__success").should("contain", "Done");
  // });
