import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from "./routes/books.js"; 

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/books', booksRoutes);

app.get('/', (req, res) => {
    res.send("Hello YOU.")
});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));


//biblioteka
//GET/book(/:id) - finds all books(/a book)
//POST/book - creates a book
//DELETE/book/:id - deletes a book
//PATCH/book/:id - updates a book