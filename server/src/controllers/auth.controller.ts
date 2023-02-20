import { Request, Response } from "express";
import { NewregisterUser, LoginUser } from "../services/auth.services";

/* registro de usuario */
const registerCtrl = async ({ body }: Request, res: Response ) => {
  const responseUser = await NewregisterUser(body);
  // res.send(responseUser); // TODO: Aquí no mandas el status no? send en vez de json?
  res.status(201).json({
    status: 'Correct Register',
    responseUser,
  });
};

/* Login de usuario */
const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await LoginUser({ email, password });
    res.status(201).json ({
      status: 'Correct login',
      responseUser, 
    });
  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403)
    // res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { loginCtrl, registerCtrl };
