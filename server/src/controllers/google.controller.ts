import { Request , Response } from "express";

/* registro de usuario */
const googleLoginCtrl = async ({body}:Request, res: Response) => {
    const data = body;
    res.status(200).json({data: "aqui iran los datos"});
};

export {googleLoginCtrl}