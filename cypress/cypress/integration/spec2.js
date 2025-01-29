describe('Teste End-To-End', () => {
    it('Teste 1: Visita Página', () => {
        cy.visit('http://localhost:5000/')
    })
    it('Teste 2: Verifica item na página', () => {
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })
    it('Teste 3: Calcula Frete', () => {    
        cy.get('[data-id=3]').within(() => {
           cy.get('input').type('10000-000')
           cy.contains('Calcular Frete').click().then
           cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')

        cy.get('.swal-button').click()
    })
    it('Teste 4: Compra Livro', () => {
        cy.wait(1000)
        cy.get('[data-id=3]').within(() => {
            cy.contains('Comprar').click().then
            cy.wait(2000)
        })

        cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')
        cy.get('.swal-button').click()
    })
})