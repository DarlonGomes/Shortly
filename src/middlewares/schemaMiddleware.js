import { signInSchema, signUpSchema, shortenSchema } from "../models/joiModels.js";

export default function schemaValidation (req, res, next){
    const data = res.locals.cleanData;
    console.log(data)
    let validation;
    switch (true) {
        case data.confirmPassword != undefined:
            validation = signUpSchema.validate(data, {abortEarly: false});
            if(validation.error) return res.send(validation.error).status(422);
            break;
        case data.url !== undefined:
            validation = shortenSchema.validate(data, {abortEarly: false});
            if(validation.error) return res.send(validation.error).status(422);
            break;
        default:
            validation = signInSchema.validate(data, {abortEarly: false});
            if(validation.error) return res.send(validation.error).status(422);
            break;
    }
    next();
}

