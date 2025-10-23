describe('Posts API', () => {

  it('POST - Adicionar post válido', () => {
    cy.request({
      method: 'POST',
      url: '/posts/add',
      body: { title: 'Post Teste', body: 'Conteúdo do post', userId: 1 },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Post Teste');
    });
  });

  it('POST - Adicionar post inválido', () => {
    cy.request({
      method: 'POST',
      url: '/posts/add',
      body: { body: 'Sem título', userId: 1 },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

});
