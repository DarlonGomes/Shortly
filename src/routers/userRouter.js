import { Router } from "express";

const router = Router();

router.post('/signup', signupController);
router.post('/signin', siginController);
router.get('/users/me', userDataController);

export default router;