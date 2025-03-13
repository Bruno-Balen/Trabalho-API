const servico = require('../services/Livros');

function buscarLivros(req, res) {
  const livros = servico.buscarLivros();
  res.json(livros);
}

function buscarLivroPorId(req, res) {
  const livro = servico.buscarLivroPorId(req.params.id);

    if (!livro) {
        return res.status(404).json({erro: `Livro com o código ${req.params.id} não encontrado`});
    }

    return res.status(200).json(livro);
}


module.exports = {
    buscarLivros, 
    buscarLivroPorId};