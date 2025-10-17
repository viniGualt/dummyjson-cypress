describe('Funcionalidade: Produtos', () => {
  it('Deve retornar status 200 e um objeto com os produtos ', () => {
    cy.request('GET', '/products') .then(response => {
      cy.expect(response.status).to.eq(200);
      cy.expect(response.body).to.be.an('object');

      cy.expect(response.body).to.have.property('products');
      cy.expect(response.body.products).to.be.an('array').and.have.lengthOf(30);

      cy.expect(response.body).to.have.property('total', 194);
    })
  })
})