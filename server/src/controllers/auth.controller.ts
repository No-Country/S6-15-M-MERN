import { Request, Response, NextFunction } from "express";
import { NewregisterUser, LoginUser } from "../services/auth.services";
import { AppError } from "../utils/errorObjectExtended";

/* registro de usuario */
const registerCtrl = async ({ body }: Request, res: Response,  next: NextFunction ) => {
  try {
    const responseUser = await NewregisterUser(body);
    if(responseUser == "El_Usuario_ya_Existe") {
      res.status(400).json(responseUser);
    }
    else if(responseUser){
      const { email } = responseUser;
      const { password } = body;
      const newUser = await LoginUser({ email,  password})
      res.status(201).json({
          status: 'Correct Register',
          user: newUser
        });
    }
    
    }
    catch (error: any) {
      next(new AppError(500, error.message));
    }
};

/* Login de usuario */
const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await LoginUser({ email, password });

  if (responseUser === 'PASSWORD_INCORRECT') {
    res.status(403).json({responseUser});
  } else if(responseUser === "NOT_FOUND_USER"){
    res.status(403).json({responseUser});
  }else {
    res.status(200).json({
      status: 'Correct login',
      responseUser, 
    });
  }
};

export { loginCtrl, registerCtrl };
