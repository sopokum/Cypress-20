// cypress/integration/register-user.spec.js

describe('Register User', () => {
  it('should register a new user', () => {
    // 1. Launch browser
    cy.visit('http://automationexercise.com')

    // 2. Verify that home page is visible successfully
    cy.get('.logo').should('be.visible')

    // 3. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > li > a[href="/login"]').click()

    // 4. Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should('contain', 'New User Signup!')

    // 5. Enter name and email address
    cy.get('[data-qa="signup-name"]').type('sopo kumsiashvili')
    cy.get('[data-qa="signup-email"]').type('sopotest3@gmail.com')

    // 6. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()

    // 7. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get('h2').should('be.visible')

    // 8. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('#id_gender1').click
    cy.get('#password').type('password123')
    cy.get('#days').select('15')
    cy.get('#months').select('August')
    cy.get('#years').select('1990')

    // 9. Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').check()

    // 10. Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').check()

    // 11. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('#first_name').type('sopo')
    cy.get('#last_name').type('kumsiashvili')
    cy.get('#company').type('guda_tv')
    cy.get('#address1').type('chavchavadze st. 10')
    cy.get('#address2').type('chavchavadze st. 80')
    cy.get('#country').select('India')
    cy.get('#state').type('geo')
    cy.get('#city').type('tbilisi')
    cy.get('#zipcode').type('12345')
    cy.get('#mobile_number').type('123-456-7890')

    // 12. Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click()

    // 13. Verify that 'ACCOUNT CREATED!' is visible
    cy.contains("Account Created").should("be.visible")

    // 14. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()

    // 15. Verify that 'Logged in as username' is visible
    // 16. Click 'Delete Account' button
    cy.get('.shop-menu > .nav > li > a[href="/delete_account"]').click()

    // 17. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.get('h2').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
})