let books = [];

const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

const addBook = (title, author, year, genre) => {
    const book = { id: generateId(), title, author, year, genre };
    books.push(book);
    return book;
};

const listBooks = () => books;

const updateBook = (id, updatedData) => {
    const book = books.find(b => b.id === id);
    if (book) {
        Object.assign(book, updatedData);
        return book;
    } else {
        return null;
    }
};

const deleteBook = (id) => {
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
        return books.splice(index, 1)[0];
    } else {
        return null;
    }
};

const findBooksByTitle = (title) => books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
const findBooksByAuthor = (author) => books.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
const findBooksByYear = (year) => books.filter(b => b.year === year);
const findBooksByGenre = (genre) => books.filter(b => b.genre.toLowerCase().includes(genre.toLowerCase()));

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
