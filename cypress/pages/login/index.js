import { elements as elm } from "./elements"

class Login {
    visitarPagina() {
        cy.visit('/')
    }
    preencherCredencias() {
        cy.fixture('user.json').then((user) => {
            cy.get(elm.email).type(user.email)
            cy.get(elm.password).type(user.password)
            cy.get(elm.loginButton).click()
        })
    }

    loginGestaoInvalido() {
        cy.fixture('user.json').then((user) => {
            cy.get('#email').type(user.emailInvalid)
            cy.get('#password').type(user.passwordInvalid)
            cy.get('.styles_button__JXDuS').click()
        })
    }

    validarErroLogin() {
        cy.get(elm.erroLogin).should('be.visible').screenshot('Erro Login')

    }
}
export default new Login() // Nova instancia da classe Login