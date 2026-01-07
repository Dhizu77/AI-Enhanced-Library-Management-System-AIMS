import { Router } from 'express';
import * as booksController from '../controllers/booksController';

const router = Router();

router.get('/', booksController.listBooks);
router.get('/:id', booksController.getBook);
router.post('/', booksController.createBook);

export default router;
