import { Router } from 'express';
import { signInHandler, signUpHandler, userDataHandler } from '../controllers/userController.js';
import { clearData } from '../middlewares/stripMiddleware.js'
const router = Router();

router.post('/signup',clearData, signUpHandler);
router.post('/signin',clearData, signInHandler);
router.get('/users/me', userDataHandler);

export default router;