import { customAlphabet } from "nanoid";
import connection from "../database/postgres.js";

const nanoid = customAlphabet('123456789abcdefghijklmnopqrstvwxyz', 10);

export const urlShortener = async (req, res) => {
    const {id} = res.locals.user;
    const {url} = res.locals.cleanData;

    try {
        const shortUrl = nanoid();
        await connection.query(`
        INSERT INTO urls
        (url, "shortUrl", "userId", views)
        VALUES
        ($1, $2, $3, $4)`,
        [url, shortUrl, id, 0]);
        return res.send({shortUrl: shortUrl}).status(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export const urlSearcher = async (req, res) => {
    const {id} = req.params;
    try {
        const {rows: body} = await connection.query(`
        SELECT id, "shortUrl", url 
        FROM urls 
        WHERE id = $1
        `,[id]);
        if(body.length === 0) return res.sendStatus(404);
        return res.send(body[0]).status(200);
    } catch (error) {
        return res.sendStatus(500);
    }
};

export const urlRedirector = async (req, res) => {
    const {shortUrl} = req.params;
    try {
        const {rows: body} = await connection.query(`
        SELECT url FROM urls WHERE "shortUrl" = $1
        `, [shortUrl]);
        if(body.length === 0) return res.sendStatus(404);
        await connection.query(`
        UPDATE urls 
        SET views = views + 1
        WHERE "shortUrl" = $1
        `, [shortUrl])
        return res.redirect(body[0].url);
    } catch (error) {
        return res.sendStatus(500);
    }
};

export const urlDelete = async (req, res) => {
    const userId = res.locals.user.id;
    const {id} = req.params;
    try {
        const {rows: body} = await connection.query(`
        SELECT * FROM urls 
        WHERE id = $1
        `,[id]);
        
        if(body.length === 0) return res.sendStatus(404);
        if(body[0].userId !== userId) return res.sendStatus(401);
        await connection.query(`
        DELETE FROM urls
        WHERE id = $1
        `,[id]);
        return res.sendStatus(204);
    } catch (error) {
        return res.sendStatus(500);
    }
};