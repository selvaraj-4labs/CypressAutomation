/// <reference types="cypress" />

import LoginPage from '../PageObjects/LoginPage'
import TrustDevicePage from '../PageObjects/TrustDevicePage'
import EmailVerificationPage from '../PageObjects/EmailVerificationPage'

const lp = new LoginPage()
const tdp = new TrustDevicePage()
const evp = new EmailVerificationPage()

Given('I navigate to the vauld website', () => {
    lp.navigate()
})

When('Enter the credentials and click on Sign in button', (data) => {
    data.hashes().forEach((row) => {
        lp.enterUserName(row.username)
        lp.enterPassword(row.password)
    })
    lp.clickSignIn()
})

And('Choose Yes I trust the device option', () => {
    tdp.selectOptionYes()
    tdp.clickContinue()
})

And('Enter the OTP', () => {
    evp.enterOTP()
    evp.clickContinue()
})

Then('Navigate to dashboard page', () => {
    cy.url().should('include','dashboard')
    cy.title().should('contain','Vauld')
})
