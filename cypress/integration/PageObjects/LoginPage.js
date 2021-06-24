/// <reference types="cypress" />

class LoginPage
{
    navigate()
    {
        cy.visit('https://uat.bankofhodlers.com/auth/signin')
        cy.title().should('contain','Sign In')
    }

    enterUserName(value){
        const element = cy.get('[type="email"]')
        element.should('be.visible')
            .should('have.value','')
            .type(value)
            .should('have.value',value)
        return this
    }

    enterPassword(value){
        const element = cy.get('#password')
        element.should('be.visible')
            .should('have.value','')
            .type(value, {log : false})
            .should('have.value',value)
        return this
    }

    clickSignIn(){
        const button = cy.get('.btn')
        button.should('contain','SIGN IN')
            .should('not.be.disabled')
            .click()
    }


}

export default LoginPage