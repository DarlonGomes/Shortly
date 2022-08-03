import connection from "../database/postgres.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.ACCESS_TOKEN_SECRET;

export const signUpHandler = async (req,res) => {
    const user = res.locals.cleanData;
    try {
        const {rows: emailExists} = await connection.query(`
        SELECT * FROM users
        WHERE email = $1`,
        [user.email]);
        if(emailExists.length !== 0){
            return res.sendStatus(409);
        }
        
        delete user.confirmPassword;

        const hashPassword = bcrypt.hashSync(user.password, 10);

        await connection.query(`
        INSERT INTO users
        (name, email, password)
        VALUES
        ($1, $2, $3)`,
        [user.name, user.email, hashPassword]);

        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export const signInHandler = async (req,res) => {
    const login = res.locals.cleanData;
   
        const {rows: user} = await connection.query(`
        SELECT * FROM users
        WHERE email = $1`,
        [login.email]);
        if(user[0] && bcrypt.compareSync(login.password, user[0].password)){
            const token = jwt.sign({id: user[0].id}, SECRET, {expiresIn: "3d"});
            return res.json({token, name: user[0].name}).status(200);
        }else{
            return res.sendStatus(401);
        }
}

export const userDataHandler = async (req,res) => {
    
}