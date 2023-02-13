import { NextFunction, Request, Response } from "express";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {

    const jwtByUser = req.headers.authorization || null;
    console.log({jwtByUser})
    next();
  } catch (e) {
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};

export { checkJwt };
