const Livros = [{id: 1, titulo: 'Livro 1', autor:'fulano', ano: 2020}, 
                {id: 2, titulo: 'Livro 2', autor:'ciclano', ano: 2021},
                {id: 3, titulo: 'Livro 3', autor:'beltrano', ano: 2022},
                {id: 4, titulo: 'Livro 4', autor:'juca', ano: 2023},
                {id: 5, titulo: 'Livro 5', autor:'tito', ano: 2024}];

function getLivros(){
    return Livros;
};

function getLivroPorId(id){
    return Livros.find(livro => livro.id == id);
};

function postLivro(livro){
    const maiorId = Livros.length > 0 ? Math.max(...Livros.map(l => l.id)) : 0;
    livro.id = maiorId + 1;

    Livros.push(livro);
};

function deleteLivro(id){
    const livro = getLivroPorId(id);
    if (!livro) {
        return false;
    }

    const index = Livros.indexOf(livro);
    Livros.splice(index, 1);
    return true;
};

module.exports = {
    getLivros, 
    getLivroPorId, 
    postLivro,
    deleteLivro};