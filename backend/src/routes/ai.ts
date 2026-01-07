import { Router } from 'express';
import * as aiController from '../controllers/aiController';

const router = Router();

router.post('/ask', aiController.askModel);

export default router;
