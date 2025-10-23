describe('Todos API', () => {

  it('GET - Lista de todos', () => {
    cy.request('/todos').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.todos).to.be.an('array');
    });
  });

  it('PUT - Atualizar todo existente', () => {
    cy.request({
      method: 'PUT',
      url: '/todos/1',
      body: { todo: 'Todo Atualizado', completed: true }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.todo).to.eq('Todo Atualizado');
      expect(response.body.completed).to.eq(true);
    });
  });

});
