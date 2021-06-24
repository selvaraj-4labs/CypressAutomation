/// <reference types="cypress" />

class DashboardPage
{
    selectCurrency(value){
        cy.get('span.ng-tns-c16-8').click()
        cy.get('.search-coin')
            .should('be.focused')
            .type(value)
        cy.get('span.ng-tns-c16-8 > span.v-align-middle')
            //.should('have.value',value)
            .click()
        cy.get('.pull-right > .color-secondary-light')
            .should('contain',value)
        cy.get('.int-rate-section > .text-center > .v-align-middle')
            .should('contain',value)
        
    }

    enterAmount(value){
        cy.get('[placeholder="Amount"]')
            .should('have.value','')
            .type(value)
            .should('have.value',value)
        cy.get('.dollar-holder > .font-h5')
            .should('exist')
            .should('be.visible')
    }


    clickCreateFD_Button(){
        cy.contains('CREATE FIXED DEPOSIT')
            .should('be.enabled')
            .click()
    }

    goToWalletScreen(){
        cy.get('[routerlink="wallet"] > .ng-tns-c7-3 > .nav-link-label').click()
    }
}

export default DashboardPage