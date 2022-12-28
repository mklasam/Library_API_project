import express from 'express';
import { getBooks, postBook, getBook, deleteBook, patchBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);

router.post('/', postBook);

router.get('/:id', getBook);

router.delete('/:id', deleteBook);

router.patch('/:id', patchBook);

export default router;