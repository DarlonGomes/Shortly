import connection from '../database/postgres.js';

export const checkRank = async () => {
    const {rows} = await connection.query(`
    SELECT 
    users.id AS id,
    users.name AS name,
    COALESCE(COUNT(urls.url), 0) AS "linksCount",
    COALESCE(SUM(urls.views), 0) AS "visitCount"
    FROM users
    LEFT JOIN urls ON urls."userId" = users.id
    GROUP BY users.id
    ORDER BY "visitCount" DESC
    LIMIT 10
    `);
    return rows
}