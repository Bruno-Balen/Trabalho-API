const controllers = require('../controllers/livros');

module.exports = (app) => {
    app.get('/livros', controllers.buscarLivros);
    app.get('/livros/:id([0-9]+)', controllers.buscarLivroPorId);
    // app.post('/livros', controllers.cadastrarLivro);
}