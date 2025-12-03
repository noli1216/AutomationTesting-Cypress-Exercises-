class LoginPage {
  visit() {
    cy.visit("https://practice.expandtesting.com/login");
  }

  enterEmail(email) {
  cy.get("#username").type(email); 
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  submit() {
    cy.get("#submit-login").click();
  }

  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.submit();
  }
}

export default LoginPage;
