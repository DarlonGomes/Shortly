import connection from '../database/postgres.js';

export const checkRank = async () => {
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
    return rows
}