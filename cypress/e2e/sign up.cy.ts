describe('Verify if we can sign up page', () => {
    it('navigate successfully', () => {
  
        cy.visit('https://cordemo.usecology.com/');
        cy.contains('a', 'Sign-up Now').click();
        cy.wait(6000);
        cy.xpath('//input[@formcontrolname="first_name"]').eq(0).type("Aura");        
        cy.xpath('//input[@formcontrolname="last_name"]').eq(0).type('Kein');
        cy.xpath('//input[@formcontrolname="UserId"]').eq(0).type('10007');
        cy.xpath('//input[@formcontrolname="title"]').eq(0).type('QA test');
        cy.xpath('//input[@formcontrolname="address"]').eq(0).type('Locus community');
        cy.xpath('//input[@formcontrolname="city"]').eq(0).type('Texas');
        cy.wait(5000);
        cy.xpath('//select[@formcontrolname="state"]').eq(0).select('AK');
        cy.xpath('//input[@formcontrolname="zip"]').eq(0).type('640012890');
        cy.wait(3000);
        cy.xpath('//select[@formcontrolname="country_code"]').eq(0).select('UNITED STATES');
        cy.xpath('//input[@formcontrolname="company"]').eq(0).type('Optisol');
        cy.xpath('//input[@formcontrolname="email"]').eq(0).type('aurakein@yopmail.com');
        cy.xpath('//input[@formcontrolname="phone"]').eq(0).type('2123356789');
        cy.xpath('//input[@formcontrolname="confirmemail"]').eq(0).type('aurakein@yopmail.com');
        cy.xpath('//input[@formcontrolname="mobile"]').eq(0).type('2123456780');
        cy.xpath('//input[@formcontrolname="fax"]').eq(0).type('2123356787');
        cy.xpath('//input[@formcontrolname="search_id"]').eq(0).type('888880');
        cy.wait(9000);
        cy.get('em.fa-sign-in.fa-lg').first().click();
        cy.wait(4000);
        cy.xpath("(//*[contains(text(),'I agree, Create my Account')])[1]").click();
               
  });
});
