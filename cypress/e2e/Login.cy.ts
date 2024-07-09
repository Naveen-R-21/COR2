describe('Login functionality', () => {
  it('logs in a user successfully', () => {
    const username = Cypress.env('LOGIN_USERNAME'); // Access username from environment variable
    const password = Cypress.env('LOGIN_PASSWORD'); // Access password from environment variable

    cy.visit('https://cordemo.usecology.com/');
    cy.get('input[name="user"]').type(username);
    cy.get('input[name="passwrd"]').type(password);
    cy.get('button[type="submit"]').click();

    // Add assertions here
    cy.get('.welcome-message').should('be.visible'); // Example assertion: Check for a welcome message
  });
});
