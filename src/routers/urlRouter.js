import { Router } from "express";
import { urlShortener, urlSearcher, urlRedirector, urlDelete } from '../controllers/urlController.js';
import schemaValidation from '../middlewares/schemaMiddleware.js';
import { authenticateToken } from '../middlewares/tokenMiddleware.js';
import { clearData } from '../middlewares/stripMiddleware.js';

const router = Router();

router.post('/urls/shorten', clearData, authenticateToken, schemaValidation, urlShortener);
router.get('/urls/:id', urlSearcher);
router.get('/urls/open/:shortUrl', urlRedirector);
router.delete('/urls/:id', authenticateToken, urlDelete);

export default router;