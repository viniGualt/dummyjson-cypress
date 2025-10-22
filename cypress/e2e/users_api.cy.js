describe('Funcionalidade: Usuários', () => {
  it('Deve retornar 200 e a lista de usuários', () => {
    cy.request("GET", "/users").then(response => {
      cy.expect(response.status).to.eq(200);
      cy.expect(response.body).to.be.an('object');

      cy.expect(response.body).to.have.property('users');
      cy.expect(response.body.users).to.be.an('array').and.have.lengthOf(30);

      cy.expect(response.body).to.have.property('total', 208);
      cy.expect(response.body).to.have.property('limit', 30);
    })
  })

  it('Deve retornar 200 e somente um usuário válido', () => {
    const userId = 23;

    cy.request("GET", `/users/${userId}`).then(response => {
      cy.expect(response.status).to.eq(200);
      cy.expect(response.body).to.be.an('object');

      cy.expect(response.body).to.have.property('id', 23);
      cy.expect(response.body).to.have.property('firstName', 'Chloe');
      cy.expect(response.body).to.have.property('lastName', 'Morales');
      cy.expect(response.body).to.have.property('age', 39);
      cy.expect(response.body).to.have.property('gender', 'female');
      cy.expect(response.body).to.have.property('email', 'chloe.morales@x.dummyjson.com');
      cy.expect(response.body).to.have.property('phone', '+92 468-541-7133');
      cy.expect(response.body).to.have.property('username', 'chloem');
      cy.expect(response.body).to.have.property('password', 'chloempass');
      cy.expect(response.body).to.have.property('birthDate', '1985-4-21');
      cy.expect(response.body).to.have.property('image', 'https://dummyjson.com/icon/chloem/128');
      cy.expect(response.body).to.have.property('bloodGroup', 'O+');
      cy.expect(response.body).to.have.property('height', 185.07);
      cy.expect(response.body).to.have.property('weight', 63.97);
      cy.expect(response.body).to.have.property('eyeColor', 'Brown');
      cy.expect(response.body).to.have.property('macAddress', 'fc:f:29:e1:37:b8');
      cy.expect(response.body).to.have.property('university', 'Syracuse University');
      cy.expect(response.body).to.have.property('role', 'user');
    })
  })

  it('Deve retornar status 404 e erro de "not found" ', () => {
    const userId = 41204;

    cy.request({
      method: "GET", 
      url: `/users/${userId}`,
      failOnStatusCode: false
    }).then(response => {
      cy.expect(response.status).to.eq(404);

      cy.expect(response.body).to.be.an('object');
      cy.expect(response.body).to.have.property('message', `User with id '${userId}' not found`)
    })
  })
})