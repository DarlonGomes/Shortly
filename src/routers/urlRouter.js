import { Router } from "express";

const router = Router();

router.post('/urls/shorten', urlShortener);
router.get('/urls/:id', urlSearcher);
router.get('/urls/open/:shortUrl', urlRedirector);
router.delete('/urls/:id', urlDelete);

export default router;