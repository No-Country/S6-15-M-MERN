import { NextFunction, Request, Response } from "express";
import { generatePassword } from "../utils/randompass";
import { decodeGoogleCredentials, generateToken } from "../utils/jwt.handle";
import { AppError } from "../utils/errorObjectExtended";
import { getUserbyEmail } from "../services/user";
import { encrypt } from "../utils/bcrypt.handle";
import { createGoogleUser } from "../services/auth.services";

const googleLoginCtrl = async ({ body }: Request, res: Response, next: NextFunction) => {
  const { credential, client_id } = body;
  // verify credentials
  const result: any = await decodeGoogleCredentials(credential);
  const { email, email_verified, name } = result;

  if (!email_verified) {
    next(new AppError(400, "Email not verified"));
  }

  // find user

  const foundUser = await getUserbyEmail(email);
  try {
    if (foundUser) {
      // if user already exists log the user and save
      if (!foundUser.idgoogle) {
        const idGoogle = encrypt(client_id);
        await foundUser.set({ idgoogle: idGoogle }).save();
      }
      const token = generateToken(foundUser._id.toString());
      return res.status(200).json({ token, user: foundUser });
    } else {
      // if user not found create a new one
      const idGoogle = await encrypt(client_id);
      const password = await encrypt(generatePassword());
      const newuser = await createGoogleUser(name, email, idGoogle, password);
      const token = generateToken(newuser._id.toString());
      return res
        .status(201)
        .json({ token, user: { id: newuser._id, name: newuser.name, email: newuser.email } });
    }
  } catch (err: any) {
    next(new AppError(400, err.message));
  }
};

export { googleLoginCtrl };
