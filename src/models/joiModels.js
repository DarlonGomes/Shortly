import Joi from "joi";

export const signInSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(1).required()
});

export const signUpSchema = Joi.object({
    name: Joi.string().min(1).trim().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(1).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
});

export const shortenSchema = Joi.object({
    url: Joi.string().uri().required()
});

