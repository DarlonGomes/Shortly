import { customAlphabet } from "nanoid";
import { urlHandler } from "../repository/urlRepository.js";

const nanoid = customAlphabet('123456789abcdefghijklmnopqrstvwxyz', 10);

export const urlShortener = async (req, res) => {
    const {id} = res.locals.user;
    const {url} = res.locals.cleanData;
   
        const shortUrl = nanoid();
        await urlHandler.shortener(url, shortUrl, id);
        return res.status(201).send({shortUrl: shortUrl});
    
}

export const urlSearcher = async (req, res) => {
    const {id} = req.params;
    try {
        const body = await urlHandler.searcher(id);
        if(!body) return res.sendStatus(404);
        return res.send(body).status(200);
    } catch (error) {
        return res.sendStatus(500);
    }
};

export const urlRedirector = async (req, res) => {
    const {shortUrl} = req.params;
    try {
        const body = await urlHandler.redirector(shortUrl);
        if(!body) return res.sendStatus(404);
        return res.redirect(body.url);
    } catch (error) {
        return res.sendStatus(500);
    }
};

export const urlDelete = async (req, res) => {
    const userId = res.locals.user.id;
    const {id} = req.params;
    try {
        const body = await urlHandler.checkOwner(id);
        if(!body) return res.sendStatus(404);
        if(body.userId !== userId) return res.sendStatus(401);
        await urlHandler.delete(id);
        return res.sendStatus(204);
    } catch (error) {
        return res.sendStatus(500);
    }
};