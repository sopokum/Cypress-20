Cypress.Commands.add("register1", (mail, LoggingName, passwrod) => {
      cy.visit("https://automationteststore.com/")
     
      it('Registers a new user', () => {
        cy.get('a[href$="account/create"]').click();
        cy.get('#AccountFrm_firstname').type('sopo');
        cy.get('#AccountFrm_lastname').type('kumsaishvili');
        cy.get('#AccountFrm_email').type(email);
        cy.get('#AccountFrm_address_1').type('chavchavadze St');
        cy.get('#AccountFrm_city').type('Tbilisi');
        cy.get('#AccountFrm_zone_id').select('Alabama');
        cy.get('#AccountFrm_postcode').type('12345');
        cy.get('#AccountFrm_country_id').select('United States');
        cy.get('#AccountFrm_loginname').type(sopokums);
        cy.get('#AccountFrm_password').type(password123);
        cy.get('#AccountFrm_confirm').type(password123);
        cy.get('button[title="Continue"]').click();
 }) });
 