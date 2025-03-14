const controllers = require('../controllers/livros');

//função que exporta as rotas e os métodos que
//devem ser executados quando cada rota for chamada
module.exports = (app) => {
    app.get('/livros', controllers.getLivros);
    app.get('/livros/:id([0-9]+)', controllers.getLivroPorId);
    app.post('/livros', controllers.postLivro);
    app.delete('/livros/:id([0-9]+)', controllers.deleteLivro);
    app.patch('/livros/:id([0-9]+)', controllers.patchLivro);
}