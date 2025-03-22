const servico = require('../services/Livros');

//função que retorna todos os livros
function getLivros(req, res) {
    const livros = servico.getLivros();
    res.json(livros);
}

//função que retorna um livro por id
function getLivroPorId(req, res) {
    //faz a busca do livro por id  
    const livro = servico.getLivroPorId(req.params.id);

    //se o livro não existir, retorna um erro 404  
    if (!livro) {
        return res.status(404).json({ erro: `Livro com o código ${req.params.id} não encontrado` });
    }

    return res.status(200).json(livro);
}

//função que adiciona um livro ao array de livros
function postLivro(req, res) {
    const livro = req.body;
    //verifica se todos os campos foram preenchidos
    if (!livro.titulo || !livro.autor || !livro.ano) {
        return res.status(400).json({ erro: 'Requisição inválida, todos os campos são obrigatórios' });
    }
    //adiciona o livro ao array de livros
    servico.postLivro(livro);
    return res.status(201).json({ mensagem: 'Livro adicionado com sucesso' });
}

//função que exclui um livro do array de livros
function deleteLivro(req, res) {
    //verifica se o livro existe
    //se não existir, retorna um erro 404
    if (!servico.getLivroPorId(req.params.id)) {
        return res.status(404).json({ erro: `Livro com o código ${req.params.id} não encontrado` });
    }
    //se o livro existir, exclui o livro, caso contrário, retorna um erro 500
    if (!servico.deleteLivro(req.params.id)) {
        return res.status(500).json({ erro: 'Erro ao excluir livro' });
    }

    return res.status(204).send();
}

//função que atualiza um livro do array de livros
function patchLivro(req, res) {
    const livro = req.body;
    //verifica se o livro existe
    //se não existir, retorna um erro 404
    if (!servico.getLivroPorId(req.params.id)) {
        return res.status(404).json({ erro: `Livro com o código ${req.params.id} não encontrado` });
    }
    //se o livro existir, atualiza o livro, caso contrário, retorna um erro 500
    if (!servico.patchLivro(req.params.id, livro)) {
        return res.status(500).json({ erro: 'Erro ao atualizar livro' });
    }

    return res.status(204).send();
}
//exporta as funções
module.exports = {
    getLivros,
    getLivroPorId,
    postLivro,
    deleteLivro,
    patchLivro
};