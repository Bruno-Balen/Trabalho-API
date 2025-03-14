//definindo um array de objetos que representam livros
//cada objeto possui um id, um título, um autor e um ano de lançamento
const Livros = [{ id: 1, titulo: 'Livro 1', autor: 'fulano', ano: 2020 },
{ id: 2, titulo: 'Livro 2', autor: 'ciclano', ano: 2021 },
{ id: 3, titulo: 'Livro 3', autor: 'beltrano', ano: 2022 },
{ id: 4, titulo: 'Livro 4', autor: 'juca', ano: 2023 },
{ id: 5, titulo: 'Livro 5', autor: 'tito', ano: 2024 }];

//função que retorna todos os livros
function getLivros() {
    return Livros;
};

//função que retorna um livro por id
function getLivroPorId(id) {
    return Livros.find(livro => livro.id == id);
};

//função que adiciona um livro ao array de livros
function postLivro(livro) {
    //verifica se o array de livros está vazio
    //se estiver, o id do livro será 1, senão, ira criar um array com todos os ids dos livros
    //e pegar o maior id e somar 1 para criar o id do novo livro
    const maiorId = Livros.length > 0 ? Math.max(...Livros.map(l => l.id)) : 0;
    livro.id = maiorId + 1;

    //adiciona o livro ao array de livros
    Livros.push(livro);
};

//função que exclui um livro do array de livros
function deleteLivro(id) {
    //verifica se o livro existe
    //se não existir, retorna false
    const livro = getLivroPorId(id);
    if (!livro) {
        return false;
    }

    //se o livro existir, pega o index do livro no array de livros e exclui o livro
    const index = Livros.indexOf(livro);
    Livros.splice(index, 1);
    return true;
};

//função que atualiza um livro do array de livros
function patchLivro(id, livro) {
    //verifica se o livro existe
    //se não existir, retorna false
    const livroAtual = getLivroPorId(id);
    if (!livroAtual) {
        return false;
    }
    //se o livro existir, pega o index do livro no array de livros
    const index = Livros.indexOf(livroAtual);
    //atualiza o livro no array de livros apenas com os campos que foram passados no body da requisição
    Livros[index] = { ...livroAtual, ...livro };
    return true;
};

//exporta as funções
module.exports = {
    getLivros,
    getLivroPorId,
    postLivro,
    deleteLivro,
    patchLivro
};