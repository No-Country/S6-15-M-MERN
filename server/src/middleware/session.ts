import { NextFunction, Request, Response } from "express";
// import { JwtPayload } from "jsonwebtoken";
// import { verified } from "../utils/bcrypt.handle";
import {verifyToken} from '../utils/jwt.handle'
import {RequestExt} from '../interfaces/req-ext'

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop()
    const isUser = verifyToken(`${jwt}`) as { id: string };
      // res.status(200);
      // res.send('Su_JWT_O_SESSION_ES_VALIDO');
    console.log(isUser)
    if (!isUser) {
      res.status(401);
      res.send('NO_TIENES_UN_JWT_O_SESSION_VALIDO');
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log({ e })
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};

export { checkJwt };
