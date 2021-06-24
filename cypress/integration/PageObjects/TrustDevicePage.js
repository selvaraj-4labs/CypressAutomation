/// <reference types="cypress" />

class TrustDevicePage
{

    selectOptionYes() {
        const element = cy.get('[type="radio"]').first()
        element.should('not.be.checked')
        element.parent()
            .should('contain','Yes, I trust this device')
        element.should('be.visible')
            .click({force:true})
        //element.should('be.checked')
    }

    clickContinue() {
        const button = cy.get('.continue-btn-margin')
        button.should('be.visible')
            .should('be.enabled')
            .should('contain','CONTINUE')
            .click()
    }
}

export default TrustDevicePage