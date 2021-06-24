/// <reference types="cypress" />

class EmailVerificationPage
{
    enterOTP(){
        cy.get('[name="1"]').should('be.focused')
            .should('have.value','')
            .type('0',{log: false})
            .should('have.value',"0")
        cy.get('[name="2"]').should('be.focused')
            .should('have.value','')
            .type('0',{log: false})
            .should('have.value',"0")
        cy.get('[name="3"]').should('be.focused')
            .should('have.value','')
            .type('0',{log: false})
            .should('have.value',"0")
        cy.get('[name="4"]').should('be.focused')
            .should('have.value','')
            .type('0',{log: false})
            .should('have.value',"0")
    }

    clickContinue() {
        const button = cy.get('.continue-btn-margin')
        button.should('be.visible')
            .should('be.enabled')
            .should('contain','CONTINUE')
            .click()
    }

}

export default EmailVerificationPage