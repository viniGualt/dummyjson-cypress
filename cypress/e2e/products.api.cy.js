describe('Funcionalidade: Produtos', () => {
  it('Deve retornar status 200 e um objeto com os produtos ', () => {
    cy.request('GET', '/products').then(response => {
      cy.expect(response.status).to.eq(200);
      cy.expect(response.body).to.be.an('object');

      cy.expect(response.body).to.have.property('products');
      cy.expect(response.body.products).to.be.an('array').and.have.lengthOf(30);

      cy.expect(response.body).to.have.property('total', 194);
    })
  })

  it('Deve retornar status 200 e a listagem de produtos, limitado à 5 produtos', () => {
    cy.request({
      method: 'GET',
      url: '/products',
      qs: {
        "limit": 5
      }
    }).then(response => {

      cy.expect(response.status).to.eq(200);
      cy.expect(response.body).to.be.an('object');

      cy.expect(response.body).to.have.property('products');
      cy.expect(response.body.products).to.be.an('array').and.have.lengthOf(5);

      cy.expect(response.body).to.have.property('total', 194);
    })
  })

  it('Deve retornar e as propriedades dos 5 primeiros produtos', () => {
    cy.request({
      method: 'GET',
      url: '/products',
      qs: {
        "limit": 5
      }
    }).then(response => {

      cy.expect(response.status).to.eq(200);
      cy.expect(response.body).to.be.an('object');
      cy.expect(response.body).to.have.property('products');

      var products = response.body.products;

      products.forEach(product => {
        cy.expect(product).to.have.property('id');
        cy.expect(product).to.have.property('title');
        cy.expect(product).to.have.property('description');
        cy.expect(product).to.have.property('category');
        cy.expect(product).to.have.property('price');
        cy.expect(product).to.have.property('discountPercentage');
        cy.expect(product).to.have.property('rating');
        cy.expect(product).to.have.property('stock');
        cy.expect(product).to.have.property('tags');
        cy.expect(product).to.have.property('brand');
        cy.expect(product).to.have.property('sku');
        cy.expect(product).to.have.property('weight');
        cy.expect(product).to.have.property('dimensions');
        cy.expect(product).to.have.property('warrantyInformation');
        cy.expect(product).to.have.property('shippingInformation');
        cy.expect(product).to.have.property('availabilityStatus');
        cy.expect(product).to.have.property('reviews');
        cy.expect(product).to.have.property('returnPolicy');
        cy.expect(product).to.have.property('minimumOrderQuantity');
        cy.expect(product).to.have.property('meta');
        cy.expect(product).to.have.property('images');
        cy.expect(product).to.have.property('thumbnail');
      })

    })
  })
})