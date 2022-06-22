/// <reference types="cypress" />
describe('halaman login', () => {
    it('login with uncorrect username & password', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username','password')
        
        cy.get('[id=pay_bills_tab]').click()
        cy.url().should("equal","http://zero.webappsecurity.com/bank/pay-bills.html")
        cy.get('[id= sp_payee]').select('Apple').should('have.value','apple')
        cy.get('[id= sp_account]').select('Loan').should('have.value','4')
        cy.get('[id= sp_amount]').type('45')
        cy.get('input[name="date"]').invoke("val", "2022-06-23")
        cy.get('input[name="description"]').type('For Rental Mobile')
        cy.get('[id=pay_saved_payees]').click()
        cy.get('[id=alert_content]').should('contain.text','The payment was successfully submitted.')


    }   


    )
    
   


})
