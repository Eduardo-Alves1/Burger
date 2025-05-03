import { elements as elm } from "./elements";
class Cardapio {
    validarAcessoCardapio() {
        cy.url().should('include', '/dashboard')
    }

    AacessarCategoria() {
        cy.get(elm.optionCategoria).click()

    }
    validarAcessoCategoria() {
        cy.url().should('include', '/category')
        cy.get(elm.nomeCategoria).should('be.visible')
    }

    cadadastroCategoria() {
        cy.get(elm.optionCategoria).click()
        cy.fixture('category.json').then((categoria) => {
            cy.get(elm.inputCategoria).type(categoria.categoria4)
        })
        cy.get(elm.botaoCategoria).click()
    }

    validarCadastroCategoria() {
        cy.get(elm.validarCadastroCategoria).should('be.visible')
    }
}

export default new Cardapio; // Adicionado exportação padrão