import { userHandler } from "../repository/userRepository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.ACCESS_TOKEN_SECRET;

export const signUpHandler = async (req,res) => {
    const user = res.locals.cleanData;
    try {
        const result = await userHandler.userExists(user);
        
        if(result === true) return res.sendStatus(409)
        
        delete user.confirmPassword;

        const hashPassword = bcrypt.hashSync(user.password, 10);

        const success = await userHandler.signUp(user, hashPassword);
    
        if(success) return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export const signInHandler = async (req,res) => {
    const login = res.locals.cleanData;
    const user = await userHandler.userValidation(login)
    if(user && bcrypt.compareSync(login.password, user.password)){
        const token = jwt.sign({id: user.id}, SECRET, {expiresIn: "3d"});
        return res.json({token, name: user.name}).status(200);
    }else{
        return res.sendStatus(401);
    }
}

export const userDataHandler = async (req,res) => {
    const {id} = res.locals.user;
    const {rowCount, body} = await userHandler.info(id);
    if(rowCount === 0) return res.sendStatus(404);
    return res.send(body).status(200);
}