import loginData from '../data/loginData.json' as LoginData[];

import * as testingLibrary from '@testing-library/cypress';

describe('Login functionality', () => {
  it.each(loginData)('logs in with %p', (data) => {
    const username = data.username;
    const password = data.password;

    cy.visit('https://cordemo.usecology.com/'); // Assuming visit is implemented in BasePage (optional)

    const loginPage = new LoginPage(); // Assuming you have a LoginPage class
    loginPage.fillLoginForm(username, password);
    loginPage.submitLogin();
    //comment

    if (data.expectedMessage) {
      cy.get('.message').should('contain', data.expectedMessage);
    } else {
      cy.get('.error-message').should('contain', data.expectedErrorMessage);
    }
  });
});
