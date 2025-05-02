/// <reference types="cypress" />
import Login from "../pages/login";
import Cardapio from "../pages/cardapio/index";

describe('Gestão Menu', () => {
    before(() => {
        Login.visitarPagina()
        Login.preencherCredencias()
    })

    it('Acessar o menu Gestão', () => {
        // Action
        // Validar acesso ao menu Gestão
        Cardapio.validarAcessoCardapio()

        // Assert
        // Validar acesso ao menu Gestão

    })

    it('Acessar o menu Categoria', () => {
        // Action
        // Acessar o menu Categoria
        Cardapio.AacessarCategoria()

        // Assert
        // Validar acesso ao menu Categoria
        Cardapio.validarAcessoCategoria()
    })

    it('Cadastrar Categoria', () => {
        // Action
        // Cadastrar Categoria
        Cardapio.cadadastroCategoria()

        // Assert
        // Validar cadastro de categoria
        Cardapio.validarCadastroCategoria()


    })



})