import { sign, verify, decode } from "jsonwebtoken";
import { ObjectId } from "mongoose";
// import {User} from "../models/user.model"
// import {User} from '../interfaces/user.interface';
const JWT_SECRET = process.env.JWT_SECRET || "token.2024";
const GOOGLE_SECRET = process.env.GOOGLE_SECRET || "";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "5h"
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

const decodeGoogleCredentials = (credential: string) => {
  const isOk = decode(credential);
  return isOk;
};

export { generateToken, verifyToken, decodeGoogleCredentials };
