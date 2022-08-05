import connection from '../database/postgres.js';

export const rankHandler = async (req,res) => {
    const {rows} = await connection.query(`
    SELECT 
    users.id AS id,
    users.name AS name,
    COUNT(urls.url) AS "linksCount",
    SUM(urls.views) AS "visitCount"
    FROM users
    LEFT JOIN urls ON urls."userId" = users.id
    GROUP BY users.id
    ORDER BY "visitCount" 
    LIMIT 10
    `);
    return res.send(rows).status(200);
}