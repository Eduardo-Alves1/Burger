import { elements as elm } from "./elements";
class Cardapio {
    validarAcessoCardapio() {
        cy.url().should('include', '/dashboard')
    }

    AcessarCategoria() {
        cy.get(elm.optionCategoria).click()

    }
    validarAcessoCategoria() {
        cy.url().should('include', '/category')
        cy.get(elm.nomeCategoria).should('be.visible')
    }

    cadadastroCategoria(categoria) {
        cy.get(elm.inputCategoria).click()
        cy.get(elm.nomeCategoria).type(categoria.nome)
        cy.get(elm.botaoCategoria).click()

    }

    validarCadastroCategoria() {
        cy.get(elm.validarCadastroCategoria).should('be.visible')
    }

    cadastroCategoriaExistente(categoria) {
        cy.get(elm.inputCategoria).click()
        cy.get(elm.nomeCategoria).type(categoria.nome)
        cy.get(elm.botaoCategoria).click()
    }

    validarCategoriaExistente() {
        cy.get(elm.validarCategoriaExistente).should('be.visible')
    }
}

export default new Cardapio; // Adicionado exportação padrão