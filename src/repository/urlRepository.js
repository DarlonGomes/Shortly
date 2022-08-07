import connection from "../database/postgres.js";

export const urlHandler = {
    shortener: async function (url, shortUrl, id){
        await connection.query(`
        INSERT INTO urls
        (url, "shortUrl", "userId")
        VALUES
        ($1, $2, $3)`,
        [url, shortUrl, id]);
        return;
    },
    searcher: async function (id){
        const {rows: [body]} = await connection.query(`
        SELECT id, "shortUrl", url 
        FROM urls 
        WHERE id = $1
        `,[id]);
        return body
    },
    redirector: async function (shortUrl){
        console.log(shortUrl)
        const {rows: [body]} = await connection.query(`
        SELECT url FROM urls WHERE "shortUrl" = $1
        `, [shortUrl]);
        if(body){
        await connection.query(`
        UPDATE urls 
        SET views = views + 1
        WHERE "shortUrl" = $1
        `, [shortUrl]);
        }
        return body;
    },
    checkOwner: async function (id){
        const {rows: [body]} = await connection.query(`
        SELECT * FROM urls 
        WHERE id = $1
        `,[id]);
        return body;
    },
    delete: async function (id){
        await connection.query(`
        DELETE FROM urls
        WHERE id = $1
        `,[id]);
        return;
    }
    
}
