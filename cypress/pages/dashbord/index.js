class Dashbord {
    validarAcessoDashbord() {
        cy.url().should('include', '/dashboard')

        cy.url().should('eq', 'https://e2eburguer.netlify.app/dashboard')
        cy.get('.styles_containerHeader__EKAlV').screenshot('Page Dashboard Gestão')
    }


}

export default new Dashbord();