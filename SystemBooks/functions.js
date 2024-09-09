
const bookService = require('./bookService');
const prompt = require('prompt-sync')();

function addBook() {
    const title = prompt('Título: ');
    const author = prompt('Autor: ');
    const year = parseInt(prompt('Ano: '), 10);
    const genre = prompt('Gênero: ');

    const book = bookService.addBook(title, author, year, genre);
    console.log('Livro adicionado:', book);
}

function listBooks() {
    const books = bookService.listBooks();
    if (books.length < 1) {
        console.log("Nenhum livro encontrado. Por favor, cadastre algum livro.");
    } else {
        console.log(`Tem ${books.length} Livro(s) na biblioteca `)
        console.log('Lista de Livros:');
        console.log(books);
    }
}

function updateBook() {
    const id = prompt('ID do livro a ser atualizado: ');
    const title = prompt('Novo título (deixe vazio para não alterar): ');
    const author = prompt('Novo autor (deixe vazio para não alterar): ');
    const year = prompt('Novo ano (deixe vazio para não alterar): ');
    const genre = prompt('Novo gênero (deixe vazio para não alterar): ');

    const updatedData = {};
    if (title) updatedData.title = title;
    if (author) updatedData.author = author;
    if (year) updatedData.year = parseInt(year, 10);
    if (genre) updatedData.genre = genre;

    const book = bookService.updateBook(id, updatedData);
    if (book) {
        console.log('Livro atualizado:', book);
    } else {
        console.log('Livro não encontrado.');
    }
}

function deleteBook() {
    const id = prompt('ID do livro a ser removido: ');
    const book = bookService.deleteBook(id);
    if (book) {
        console.log('Livro removido com sucesso:', book);
    } else {
        console.log('Livro não encontrado.');
    }
}

function searchBooks() {
    console.log(`
Buscar Livros por:
1. Título
2. Autor
3. Ano
4. Gênero
`);
    const searchType = prompt('Escolha um critério de busca (1-4): ');

    switch (searchType) {
        case '1':
            const title = prompt('Título: ');
            console.log('Livros encontrados:', bookService.findBooksByTitle(title));
            break;
        case '2':
            const author = prompt('Autor: ');
            console.log('Livros encontrados:', bookService.findBooksByAuthor(author));
            break;
        case '3':
            const year = parseInt(prompt('Ano: '), 10);
            console.log('Livros encontrados:', bookService.findBooksByYear(year));
            break;
        case '4':
            const genre = prompt('Gênero: ');
            console.log('Livros encontrados:', bookService.findBooksByGenre(genre));
            break;
        default:
            console.log('Critério de busca inválido. Por favor, escolha uma opção válida.');
            searchBooks(callback); 
            return;
    }
}

module.exports = {
    addBook,
    searchBooks,
    deleteBook,
    updateBook,
    listBooks
};
