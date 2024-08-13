describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('sec a', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://cordemo.usecology.com/');
    cy.get('#user').click();
    cy.get('#user').type('manand84');
    cy.get('#passwrd').click();
    cy.get('#passwrd').type('Changeme!@2345');
    cy.get('#login').click();
    cy.wait(50000);
    cy.get('.leftmenu > .fa').click();
    cy.wait(20000);
    cy.get('.usecleftmenu > :nth-child(4) > a > [translate=""]').click();
    cy.get('.row > :nth-child(1) > :nth-child(1) > .ng-untouched').check();
    cy.get('.text-right > .btn').click();
    cy.wait(10000);
    cy.get('.search-gen-tool > .fa').click();
    cy.wait(30000);
    cy.get('tbody > :nth-child(3) > :nth-child(2) > span').click();
    cy.get('.m-lef-10 > :nth-child(7) > .form-group > .col-sm-7 > .input-group > .form-control').click();
    cy.get('.m-left-35 > .fa').click();
    cy.wait(10000);
    cy.get('tbody > :nth-child(3) > :nth-child(3) > span').click();
    cy.wait(20000);
    cy.get('app-profile-section-a > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > .row > .col-md-10 > .form-control').click();
    cy.get(':nth-child(1) > .row > .col-md-10 > .form-control').type('PCB remediation debris');
    cy.get('.b-form > .panel-m-t-a > :nth-child(2) > .row > .col-md-10 > .form-control').click();
    cy.get('.b-form > .panel-m-t-a > :nth-child(2) > .row > .col-md-10 > .form-control').type('waste');
    cy.get('app-profile-section-b > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn').click();
    cy.get(':nth-child(1) > .row > .dot-align-pad > div > [value="F"]').check();
    cy.get('.col-md-8 > [value="T"]').check();
    cy.get(':nth-child(1) > .mt5 > :nth-child(2) > .checkbox-custom').check();
    cy.get(':nth-child(1) > .mt5 > :nth-child(4) > .checkbox-custom').check();
    cy.get('.ng-tns-c83-15 > form.ng-untouched > .ng2-tag-input__text-input').click();
    cy.get('.ng-tns-c83-15 > form.ng-untouched > .ng2-tag-input__text-input').type('250');
    cy.get('.ng2-menu-item > .ng-star-inserted').click();
    cy.get('tag-input-form.ng-tns-c83-15 > form.ng-valid > .ng2-tag-input__text-input').click();
    cy.get('tag-input-form.ng-tns-c83-15 > form.ng-valid > .ng2-tag-input__text-input').type('5');
    cy.get(':nth-child(2) > .ng2-menu-item').click();
    cy.get('.ms-2 > .form-group > :nth-child(2) > .form-control').click();
    cy.get('.ms-2 > .form-group > :nth-child(2) > .form-control').type('2');
    cy.get('.form-group > :nth-child(2) > .select-option').select('MTON');
    cy.get('.col-lg-7 > :nth-child(1) > .col-md-12 > :nth-child(2) > .ng-untouched').check();
    cy.get('.viewtab > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn').click();
    cy.get('.ng-star-inserted > .col-md-8 > .form-control').click();
    cy.get('.ng-star-inserted > .col-md-8 > .form-control').type('waste');
    cy.get('#comp_typical_pct0').click();
    cy.get('#comp_typical_pct0').type('100');
    cy.get('#comp_from_pct0').click();
    cy.get('#comp_from_pct0').type('100');
    cy.get('#comp_to_pct0').click();
    cy.get('#comp_to_pct0').type('100');
    cy.get(':nth-child(4) > .row > .col-md-3 > :nth-child(2) > .ng-untouched').check();
    cy.get('.px-3 > .col-md-6 > :nth-child(2) > .checkbox-custom').check();
    cy.get(':nth-child(5) > .row > .col-md-9 > :nth-child(1) > .checkbox-custom').check();
    cy.get('#SecDPrimaryColor').select('PINK');
    cy.get('#SecDSecondaryColor').select('PURPLE');
    cy.get('.px-3 > :nth-child(2) > :nth-child(1) > .ng-pristine').check();
    cy.get('.px-3 > .col-md-2 > :nth-child(1) > .ng-pristine').check();
    cy.get('.col-md-8 > .mt5 > :nth-child(2) > .checkbox-custom').check();
    cy.get('.pl-lg-1 > .form-control').click();
    cy.get('.pl-lg-1 > .form-control').type('2');
    cy.get(':nth-child(9) > .row.px-3 > .col-md-9 > :nth-child(1) > .checkbox-custom').check();
    cy.get(':nth-child(9) > .inplist > .row > :nth-child(2) > .form-control').click();
    cy.get(':nth-child(9) > .inplist > .row > :nth-child(2) > .form-control').type('2');
    cy.get('[value="L"]').check();
    cy.get('.col-md-7 > :nth-child(1) > :nth-child(2) > .dis-inline > [value="F"]').check();
    cy.wait(30000);
    cy.get('app-profile-section-d > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn > u').click();
    cy.get('#TexasMatiral_Radio_4').check();
   // cy.get('#TexasMatiral_Radio_4').clear();
    cy.get('#TexasMatiral_Radio_4').type('C');
    cy.get('.state-waste-check > .checkbox-custom').check();
    cy.get('.col-lg-2 > .mb10 > .checkbox-custom').check();
    cy.get('.col-md-8 > .dis-inline > [value="F"]').check();
    cy.get('.cyanide-radio > [value="F"]').check();
    cy.get('.pro-gen-check > .checkbox-custom').check();
    cy.get('#secEconstituentOnj0 > .p-autocomplete > .p-autocomplete-input').click();
    cy.get('#secEconstituentOnj0 > .p-autocomplete > .p-autocomplete-input').type('water');
    cy.get(':nth-child(2) > .table > tbody > tr > .w450px').click();
    cy.get('#secEunit0').select('5: %');
    cy.get('#total0').check();
    cy.get('#typical_concentration0').click();
    cy.get('#typical_concentration0').type('3');
    cy.get('#min_concentration0').click();
    cy.get('#min_concentration0').type('3');
    cy.get('#max_concentration0').click();
    cy.get('#max_concentration0').type('7');
    cy.get('app-profile-section-e > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn').click();
    cy.get(':nth-child(1) > :nth-child(1) > .row > .col-md-5 > .radio-buttonn > [value="T"]').check();
    cy.get(':nth-child(2) > :nth-child(1) > .row > .col-md-5 > .radio-buttonn > [value="T"]').check();
    cy.get(':nth-child(4) > :nth-child(1) > .row > .col-md-5 > .radio-buttonn > [value="T"]').check();
    cy.get(':nth-child(6) > :nth-child(1) > .row > .col-md-5 > .radio-buttonn > [value="T"]').check();
    cy.get(':nth-child(10) > :nth-child(1) > .row > .col-md-5 > .radio-buttonn > [value="T"]').check();
    cy.get('.radio-buttonn > [value="U"]').check();
    cy.get('app-profile-section-f > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn').click();
    cy.get(':nth-child(1) > :nth-child(1) > .col-md-7 > :nth-child(1) > .ng-untouched').check();
    cy.get(':nth-child(2) > .row > .col-md-3 > div > [value="F"]').check();
    cy.get('.col-md-10 > :nth-child(1) > .checkbox-radio > .ng-valid').check();
    cy.get('.col-md-3 > [value="F"]').check();
    cy.get('.panel-m-t-a > :nth-child(7) > .row > .col-md-3 > :nth-child(2) > .ng-untouched').check();
    cy.get('app-profile-section-g > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn > u').click();
    cy.get('.col-md-3 > .radio-radio > [value="F"]').check();
    cy.get('.col-md-7 > .radio-radio > [value="F"]').check();
    cy.get('app-profile-section-h > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn > u').click();
    cy.get('app-profile-ldr > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn > u').click();
    cy.wait(50000);
    cy.get('app-profile-attachment > app-navigation-buttons.ng-star-inserted > .hidden-xs > .nextbtn').click();
    cy.wait(30000);
    cy.get(':nth-child(1) > td > label > .checkbox-custom').click();
    cy.wait(30000);
    cy.get('.addnew-topbtn > .list-unstyled > :nth-child(7) > .c-pointer').click();
    cy.wait(10000);
   // cy.get(':nth-child(9) > td > label > .checkbox-custom').click();
   // cy.wait(10000);
    //cy.get('img[alt="save"]').click();

    //cy.get('.toast-close-button > .ng-tns-c57-34').click();
    /* ==== End Cypress Studio ==== */
  });
})