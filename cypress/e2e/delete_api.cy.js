describe('Funcionalidade: Exclusão de Posts', () => {

    it('Deve deletar um post existente e retornar status 200', () => {
        cy.request({
            method: 'POST',
            url: '/posts/add',
            body: {
                title: 'Post para deletar',
                body: 'Conteúdo do post para teste de delete',
                userId: 1
            }
        }).then(createResponse => {
            const postId = createResponse.body.id;

            cy.request({
                method: 'DELETE',
                url: `/posts/${postId}`
            }).then(deleteResponse => {
                cy.expect(deleteResponse.status).to.eq(200);
                cy.expect(deleteResponse.body).to.be.an('object');
                cy.expect(deleteResponse.body).to.have.property('id', postId);
            });
        });
    });

    it('Não deve deletar um post inexistente e deve retornar status 404', () => {
        cy.request({
            method: 'DELETE',
            url: '/posts/999999',
            failOnStatusCode: false
        }).then(response => {
            cy.expect(response.status).to.eq(404);
        });
    });

});
