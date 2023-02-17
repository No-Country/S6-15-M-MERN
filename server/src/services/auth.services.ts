import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

/*Nuevo registro de usuario para la base de datos*/
const NewregisterUser = async ({ email, password, name }: User) => {
  const usercheck = await UserModel.findOne({ email });
  if (usercheck) return "El_Usuario_ya_Existe";
  const passHash = await encrypt(password);
  const NewregisterUser = await UserModel.create({ 
    email, 
    password:passHash, 
    name,
  });

  return NewregisterUser;
};


/* Login usuario */
const LoginUser = async ({email , password} :Auth) => {
  const LoginUsercheck = await UserModel.findOne({ email });
  if (!LoginUsercheck) return "NOT_FOUND_USER";

  const passwordHash = LoginUsercheck.password;
  const isCorrect = await verified(password , passwordHash);
 
  if(!isCorrect) return 'PASSWORD_INCORRECT';
  
  const token = generateToken(LoginUsercheck.email);
  const data = {
    token,
    user: LoginUsercheck,
  };
  return data;
};

export { NewregisterUser, LoginUser};
