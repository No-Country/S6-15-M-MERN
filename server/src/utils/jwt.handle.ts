import { sign, verify } from "jsonwebtoken";
// import {User} from "../models/user.model"
// import {User} from '../interfaces/user.interface';
const JWT_SECRET = process.env.JWT_SECRET || "token.2024";


const generateToken = (id:string) => {
  const jwt = sign({ id }, JWT_SECRET , {
    expiresIn: '1m',
  });
  return jwt;
};

const verifyToken = (jwt:string) => {
  const isOk = verify(jwt , JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };
 