import { Router } from 'express';
import { signInHandler, signUpHandler, userDataHandler } from '../controllers/userController.js';
import { clearData } from '../middlewares/stripMiddleware.js';
import schemaValidation from '../middlewares/schemaMiddleware.js';
import { authenticateToken } from '../middlewares/tokenMiddleware.js';
const router = Router();

router.post('/signup',clearData, schemaValidation, signUpHandler);
router.post('/signin',clearData, schemaValidation, signInHandler);
router.get('/users/me', authenticateToken, userDataHandler);

export default router;