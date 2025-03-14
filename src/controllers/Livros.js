const servico = require('../services/Livros');

function getLivros(req, res) {
  const livros = servico.getLivros();
  res.json(livros);
}

function getLivroPorId(req, res) {
  const livro = servico.getLivroPorId(req.params.id);

    if (!livro) {
        return res.status(404).json({erro: `Livro com o código ${req.params.id} não encontrado`});
    }

    return res.status(200).json(livro);
}

function postLivro(req, res) {
    const livro = req.body;

    if (!livro.titulo || !livro.autor || !livro.ano) {
        return res.status(400).json({erro: 'Requisição inválida, todos os campos são obrigatórios'});
    }

    servico.postLivro(livro);

    res.status(201).json(livro);
}

function deleteLivro(req, res) {
    if (!servico.getLivroPorId(req.params.id)) {
        return res.status(404).json({erro: `Livro com o código ${req.params.id} não encontrado`});
    }

    if (!servico.deleteLivro(req.params.id)) {
        return res.status(500).json({erro: 'Erro ao excluir livro'});
    }

    return res.status(204);
}

module.exports = {
    getLivros, 
    getLivroPorId,
    postLivro,
    deleteLivro};