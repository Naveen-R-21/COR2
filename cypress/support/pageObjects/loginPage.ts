import { loginPageLocators } from '../locators/login';

export class LoginPage {
  fillLoginForm(username: string, password: string) {
    cy.get(loginPageLocators.usernameInput).type(username);
    cy.get(loginPageLocators.passwordInput).type(password);
  }

  submitLogin() {
    cy.get(loginPageLocators.submitButton).click();
  }
}
