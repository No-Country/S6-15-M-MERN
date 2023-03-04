import { IUser } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

// const CreateUser = async (user: User) => {
// const InserCreateUser = await UserModel.create(user);
// return InserCreateUser;
// };

const getAlluser = async (filter: Object) => {
  const getUser = await UserModel.find(filter);
  return getUser;
};
const getAllProfessionalsService = async (professional:any, city:any, job:any) => {
  const getUser = await UserModel.find({professional, city, job});
  return getUser;
};
const getUserbyId = async (id: string) => {
  const UserbyId = await UserModel.findOne({ _id: id });
  return UserbyId;
};

const getUserbyEmail = async (email: string) => {
  const result = await UserModel.findOne({ email }).select(
    "-password -createdAt -updatedAt -googleid"
  );
  return result;
};

// {password}:User
// if (UpdateUserbyId) return "Usuario_actualizado";
//     const passHash = await encrypt(password);
//     const newpassword = await UserModel.create({
//         password:passHash,
//     });
//     return newpassword;

const UpdateUser = async (id: string, data: IUser) => {
  const UpdateUserbyId = await UserModel.findByIdAndUpdate({ _id: id }, data, {
    new: true
  });
  return UpdateUserbyId;
};

// const DeleteUserService = async (id:string) => {
//     const DeleteUserbyId = await UserModel.findByIdAndDelete({ _id: id});
//     return DeleteUserbyId;
// };

const DeleteUser = async (id: string) => {
  const DeleteUserbyId = await UserModel.findByIdAndDelete({ _id: id });
  return DeleteUserbyId;
};

export { 
  getAlluser, 
  getUserbyId, 
  UpdateUser, 
  DeleteUser, 
  getUserbyEmail, 
  getAllProfessionalsService };

// CreateUser
