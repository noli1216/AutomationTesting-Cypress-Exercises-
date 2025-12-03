class LoginPage {
  //function definition
  visit() {
    return cy.visit("https://facebook.com");
  }

  getusernamefield(){
     return cy.get("#email")

  }
  getpasswordfield(){
     return cy.get("#pass")
  }
  getclickfield(){
     return cy.get('[data-testid="royal-login-button"]');
  }
  login(username,pass){
     this.visit()
     this.getusernamefield().type(username)
     this.getpasswordfield().type(pass)
     this.getclickfield().click()
  }
}
export default LoginPage