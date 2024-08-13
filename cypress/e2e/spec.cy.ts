describe('Verify if we can Login with Valid credentials', () => {
  it('should login successfully', () => {

      cy.visit('https://cordemo.usecology.com/');

      cy.get('input#user').type('manand84');
      
      cy.get('input#passwrd').type('Changeme!@2345');

      cy.get('button#login').click();

  });
});