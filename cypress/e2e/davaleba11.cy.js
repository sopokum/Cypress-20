Cypress.Commands.add('registerUser', (user) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/create');
  
  cy.get('#AccountFrm_firstname').type(user.firstName); 
  cy.get('#AccountFrm_lastname').type(user.lastName); 
  cy.get('#AccountFrm_email').type(user.email); 
  cy.get('#AccountFrm_telephone').type(user.telephone); 
  cy.get('#AccountFrm_fax').type(user.fax || ''); 
  cy.get('#AccountFrm_company').type(user.company || ''); 
  cy.get('#AccountFrm_address_1').type(user.address1); 
  cy.get('#AccountFrm_address_2').type(user.address2 || ''); 
  cy.get('#AccountFrm_city').type(user.city); 
  cy.get('#AccountFrm_postcode').type(user.postcode); 
  cy.get('#AccountFrm_country_id').select(user.country); 
  cy.get('#AccountFrm_zone_id').select(user.zone); 
  cy.get('#AccountFrm_loginname').type(user.loginName); 
  cy.get('#AccountFrm_password').type(user.password); 
  cy.get('#AccountFrm_confirm').type(user.password); 

  if (user.newsletter) {
    cy.get('#AccountFrm_newsletter1').check(); 
  }

  cy.get('#AccountFrm_agree').check(); 
  cy.get('button[title="Continue"]').click();

  cy.url().should('include', 'success');
  cy.get('.heading1').should('contain', 'Your Account Has Been Created!');
});
Cypress.Commands.add('editUserInfo', (user) => {
  // Update the user's details
  cy.get('#AccountFrm_firstname').clear().type(user.firstName); 
  cy.get('#AccountFrm_lastname').clear().type(user.lastName); 
  cy.get('#AccountFrm_email').clear().type(user.email); 
  cy.get('#AccountFrm_telephone').clear().type(user.telephone); 
  cy.get('#AccountFrm_fax').clear().type(user.fax || ''); 

  cy.get('button[title="Continue"]').click();
});

describe('Automation Test Store Registration', () => {
  it('should register a new user with custom command', () => {
    let random = Math.round(Math.random()*100)
    let randomNew = Math.round(Math.random()*100)
    const user = {
      firstName: 'sopo',
      lastName: 'kumsiashvili',
      email: 'sopikokums'+random+'@gmail.com',
      telephone: '1234567890',
      fax: '32',
      company: 'guda',
      address1: '123 ilia chavchavadze',
      address2: '1234 chavchavadze ilia',
      city: 'tbilisi',
      postcode: '12345',
      country: 'United States',
      zone: 'California',
      loginName: 'sopokums'+random,
      password: 'TestPassword123',
      newsletter: true
    };
    cy.registerUser(user);
    const newUserInfo = {
      firstName: 'posiko' + randomNew,
      lastName: 'kumsiashvili' + randomNew,
      email: 'posikokums' + randomNew + '@gmail.com',
      telephone: '0987654321',
      fax: '23',
    };
    cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').click()
    cy.get('.side_account_list > :nth-child(3) > a').click()
    cy.editUserInfo(newUserInfo);
  });
});
