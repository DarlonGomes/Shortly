import connection from "../database/postgres.js";

export const userHandler = {
    userExists: async function (user) {
        let result = false;
        const {rowCount} = await connection.query(`
            SELECT * FROM users
            WHERE email = $1`,
            [user.email]);
        if(rowCount !== 0){
            result = true;
        };
        return result;
    },
    signUp: async function( user, hashPassword) {
        let result = true;
        try {
            await connection.query(`
            INSERT INTO users
            (name, email, password)
            VALUES
            ($1, $2, $3)`,
            [user.name, user.email, hashPassword]);
        } catch (error) {
            result = false;
        }
        return result;
    },
    userValidation: async function(login){
        const {
        rows: [user]} = await connection.query(`
        SELECT * FROM users
        WHERE email = $1`,
        [login.email]);
        return user;
    },
    info: async function(id){
        const {rowCount, rows: [body]} = await connection.query(`
        SELECT users.id AS id,
        users.name AS name,
        SUM(urls.views) as "visitCount",
        json_agg(json_build_object(
            'id', urls.id,
            'shortUrl', urls."shortUrl",
            'url', urls.url,
            'visitCount', urls.views
        )
        ORDER BY urls.views DESC
        ) as "shortenedUrls"
        FROM users
        LEFT JOIN urls ON urls."userId" = users.id
        WHERE users.id = $1
        GROUP BY users.id
        `,[id]);
        return { rowCount, body }
    }
}