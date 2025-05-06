/// <reference types="cypress" />
import Login from "../pages/login";
import Dashbord from "../pages/dashbord";
import Cardapio from "../pages/cardapio/index";

describe('Gestão Menu', () => {
    beforeEach(() => {
        cy.wait(2000);
    })
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
        Cardapio.AcessarCategoria()

        // Assert
        // Validar acesso ao menu Categoria
        Cardapio.validarAcessoCategoria()
    })

    it('Cadastrar Categoria', () => {
        // Action
        // Cadastrar Categoria
        cy.fixture('category.json').then((data) => {
            const categoria = data.categorias[5];

            Cardapio.cadadastroCategoria(categoria)

        })

        // Assert
        // Validar cadastro de categoria
        Cardapio.validarCadastroCategoria()

    })

    it('Cadastrar Categoria Existente', () => {
        // Action
        // Cadastrar Categoria
        cy.fixture('category.json').then((data) => {
            const categoria = data.categorias[3];

            Cardapio.cadastroCategoriaExistente(categoria)

        })

        // Assert
        // Validar cadastro de categoria
        Cardapio.validarCadastroCategoria()
        //APARENTEMENTE NÃO ESTA VALIDANDO, NÃO ESYOU CONSEGUINDO PEGAR O ELEMENTO QUE APARECE NA TELA, O QUE APARECE É O ELEMENTO DO ERRO DE VALIDAÇÃO, MAS NÃO É O QUE ESTÁ NO ELEMENTO VALIDAR CATEGORIA EXISTENTE

    })



})