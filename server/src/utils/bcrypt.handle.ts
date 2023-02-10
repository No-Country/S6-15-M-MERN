import {hash, compare} from 'bcryptjs'

 /*Encriptacion de la contraseña texto plano */
const encrypt = async (pass:string) => {
    const passwordhash = await hash(pass , 8)
    return passwordhash;
}


const verified = async (pass:string , passHash:string) => {
    const isCorrect = await compare(pass , passHash);
    return isCorrect;
}

export {encrypt , verified}