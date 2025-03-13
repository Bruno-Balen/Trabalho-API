const controllers = require('../controllers/livros');

module.exports = (app) => {
    app.get('/livros', controllers.getLivros);
    app.get('/livros/:id([0-9]+)', controllers.getLivroPorId);
    app.post('/livros', controllers.postLivro);
    app.delete('/livros/:id([0-9]+)', controllers.deleteLivro);
}