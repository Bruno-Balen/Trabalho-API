const Livros = [{id: 1, titulo: 'Livro 1', autor:'fulano', ano: 2020}, 
                {id: 2, titulo: 'Livro 2', autor:'ciclano', ano: 2021},
                {id: 3, titulo: 'Livro 3', autor:'beltrano', ano: 2022},
                {id: 4, titulo: 'Livro 4', autor:'juca', ano: 2023},
                {id: 5, titulo: 'Livro 5', autor:'tito', ano: 2024}];

function buscarLivros(){
    return Livros;
};

function buscarLivroPorId(id){
    return Livros.find(livro => livro.id == id);
};

function cadastrarLivro(livro){
    Livros.push(livro);
};

module.exports = {
    buscarLivros, 
    buscarLivroPorId, 
    cadastrarLivro};