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

};

export const urlDelete = async (req, res) => {

};