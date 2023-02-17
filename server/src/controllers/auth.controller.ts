import { Request , Response } from "express";
import {NewregisterUser , LoginUser} from '../services/auth.services';
// import UserModel from "../models/user.model";

/* registro de usuario */
const registerCtrl = async ({body}:Request, res: Response) => {
    const responseUser = await NewregisterUser(body);
    res.send(responseUser);
};

/* Login de usuario */
const loginCtrl = async ({body}:Request, res: Response) => {
    const {email , password} = body;
    const responseUser = await LoginUser({email , password});

    if (responseUser === 'PASSWORD_INCORRECT') {
    res.status(403)
    res.send(responseUser)
} else {
    res.send(responseUser);
}
};

export {loginCtrl , registerCtrl};