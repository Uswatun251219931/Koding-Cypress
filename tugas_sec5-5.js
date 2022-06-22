/// <reference types="cypress" />
describe('checkoutsuccess ', () => {
    
    it('login success', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture("example").then (user => {
            const username= user.username
            cy.get('[id=user-name]').clear()
            cy.get('[id=user-name]').type(user.username)
            cy.get('[id=password]').clear()
            cy.get('[id=password]').type(user.pass)
            cy.get('[id=login-button]').click()
           
            cy.url('https://www.saucedemo.com/inventory.html')

        })
      
    }
    ) 
    it('add item to icon cart success', ()=> {

        cy.get('[id=add-to-cart-sauce-labs-backpack]').click()
        cy.get('[id=shopping_cart_container]').should("contain", "1")
        //cy.get('[id=shopping_cart_container]').click()
       // cy.url('https://www.saucedemo.com/cart.html')
    }
    
    )
    
   


})
