const bookRepository = require('./bookRepository');

function addBook(title, author, year, genre) {
    return bookRepository.addBook(title, author, year, genre);
}

function listBooks() {
    return bookRepository.listBooks();
}

function updateBook(id, updatedData) {
    return bookRepository.updateBook(id, updatedData);
}

function deleteBook(id) {
    return bookRepository.deleteBook(id);
}

function findBooksByTitle(title) {
    return bookRepository.findBooksByTitle(title);
}

function findBooksByAuthor(author) {
    return bookRepository.findBooksByAuthor(author);
}

function findBooksByYear(year) {
    return bookRepository.findBooksByYear(year);
}

function findBooksByGenre(genre) {
    return bookRepository.findBooksByGenre(genre);
}

module.exports = {
    addBook,
    listBooks,
    updateBook,
    deleteBook,
    findBooksByTitle,
    findBooksByAuthor,
    findBooksByYear,
    findBooksByGenre
};
