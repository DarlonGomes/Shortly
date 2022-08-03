import { Router } from 'express';
import { rankHandler } from '../controllers/rankController.js';

const router = Router();

router.get('ranking', rankHandler);

export default router;