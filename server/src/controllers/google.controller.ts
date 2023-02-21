import { NextFunction, Request, Response } from "express";
import { generatePassword } from "../utils/randompass";
import { decodeGoogleCredentials, generateToken } from "../utils/jwt.handle";
import { AppError } from "../utils/errorObjectExtended";
import { getUserbyEmail } from "../services/user";
import { encrypt } from "../utils/bcrypt.handle";
import { createGoogleUser } from "../services/auth.services";

/* registro de usuario */
const googleLoginCtrl = async ({ body }: Request, res: Response, next: NextFunction) => {
  const { credential, clientId } = body;
  console.log("credencales", credential);
  console.log("tipo de credencial", typeof credential);
  // verify credentials
  // Puse any porque me da error y no sé qué tipo debe ir aquí typescript
  const result: any = await decodeGoogleCredentials(credential);
  const { email, email_verified, name, client_id } = result;

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
      //TODO: No entiendo porque le pasas el user.id y eso no existe. Es un user._id y es de tipo ObjectId, no un String.
      const token = generateToken(foundUser._id.toString());
      console.log("token", token);
      return res.status(200).json({ token, user: foundUser });
    } else {
      // if user not found create a new one
      const idGoogle = await encrypt(client_id);
      const password = await encrypt(generatePassword());
      const newuser = await createGoogleUser(name, email, idGoogle, password);
      const token = generateToken(newuser._id.toString());
      console.log("token", token);
      return res.status(200).json({ token, user: foundUser });
    }
  } catch (err: any) {
    next(new AppError(400, err.message));
  }
};

export { googleLoginCtrl };
function decodeGoogleLogin(credential: any): any {
  throw new Error("Function not implemented.");
}
