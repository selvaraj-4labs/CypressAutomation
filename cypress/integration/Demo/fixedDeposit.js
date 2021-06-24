/// <reference types="cypress" />

import DashboardPage from '../PageObjects/DashboardPage'

const dbp = new DashboardPage()
var cyp = ""

Given('User in dashboard page', () => {
    cy.url().should('include','dashboard')
})

When('select the currency and enter amount', (data) => {
    data.hashes().forEach((row) => {
        dbp.selectCurrency(row.currancy)
        dbp.enterAmount(row.amount)
        cyp = row.currancy
    })

})

Then('verify payout amount and interest', () => {
    cy.get('span[class*=font-h2]')
        .should('be.visible')
        .should('contain','INTEREST 9.38% APY')
    cy.get('app-fixed-deposit .int-rate-section > .text-center > .v-align-middle')
        .should('be.visible')
        .should('contain','Payout Amount USDT')
})

And('click on create fixed deposit button', () => {
    dbp.clickCreateFD_Button()
})

Then('verify success message', () => {
    cy.get('.ng-star-inserted > .font-h1')
        .should('be.visible')
        .should('contain','Success')
    cy.get('app-fixed-deposit .ng-star-inserted > .font-h4')
        .should('contain','Your Fixed Deposit has been created')
    cy.get('.font-h3 > span.v-align-middle')
        .should('contain',cyp)
})


Given('User navigate to wallet page', () => {
    dbp.goToWalletScreen()
})

When('select the currency and move to loan section', (data) => {
    data.hashes().forEach((row) => {
        cy.get('span.ng-tns-c22-13 > .coin-label').contains(row.currancy)
        cy.get(':nth-child(3) > .font-h3').click()
    })
})

Then('enter amount and select collateral currency', (data) => {
    data.hashes().forEach((row) => {
        cy.get('input[type="text"]').type(row.amount)
        cy.get('span.ng-tns-c16-41').click()
    })
    
})

And('click on take loan button', () => {
    //cy.get('')
})

Then('validate success message', () => {
    //cy.get('')
})