import { Router } from 'express';
import books from './books';
import ai from './ai';

const router = Router();

router.use('/books', books);
router.use('/ai', ai);

export default router;
