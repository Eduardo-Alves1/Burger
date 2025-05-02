import Login from "../pages/login";
import Dashbord from "../pages/dashbord";
import login from "../pages/login";

describe('Login Gestão', () => {

  beforeEach(() => {
    Login.visitarPagina()
  })

  it('Login Perfil Gestão Com Sucesso', () => {
    // Action
    // Preencher credenciais validas
    Login.preencherCredencias()

    // Assert
    // Validar acesso ao dashbord
    Dashbord.validarAcessoDashbord()

  })

  it('Login Gestão com Credenciais invalidas', () => {
    // Action
    // Preencher credenciais invalidas
    Login.loginGestaoInvalido()

    // Assert
    // Validar erro de login
    login.validarErroLogin()

  })

})

