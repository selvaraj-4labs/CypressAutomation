/// <reference types="cypress" />

import DashboardPage from '../PageObjects/DashboardPage'

const dbp = new DashboardPage()

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
