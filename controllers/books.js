import { v4 as uuidv4 } from 'uuid';

let books = [];

export const getBooks = (req, res) => {
    console.log(`Books in the library: ${books}`);
    res.send(books);
};

export const postBook = (req, res) => {

    const book = req.body;

    const bookId = uuidv4();

    const bookWId = {...book, id: bookId};

    books.push(bookWId);

    res.send(`The book with the title ${book.title} added to the library!`);
};

export const getBook = (req, res) => {
    const { id } = req.params;

    const thisBook = books.find((book) => book.id === id);

    res.send(thisBook);
};

export const deleteBook = (req, res) => {
    const { id } = req.params;

    books = books.filter((book) => book.id !== id);

    res.send(`The book with the id ${id} deleted from the library.`);
};

export const patchBook = (req, res) => {
    const { id } = req.params;
    const { title, author, pages} = req.body;

    const bookToBeUpdated = books.find((book) => book.id === id);

    if(title){
        bookToBeUpdated.title = title;
    };

    if(author){
        bookToBeUpdated.author = author;
    };

    if(pages){
        bookToBeUpdated.pages = pages;
    };

    res.send(`The book with the id ${id} has been updated.`)
};