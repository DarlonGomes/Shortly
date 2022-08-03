import jwt  from "jsonwebtoken";
const SECRET = process.env.ACCESS_TOKEN_SECRET;

export async function authenticateToken (req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if(token === null) return res.sendStatus(401);
    jwt.verify(token, SECRET, (err, id) => {
        if(err) return res.sendStatus(401);

        res.locals.user = id;
        next();
    });
};