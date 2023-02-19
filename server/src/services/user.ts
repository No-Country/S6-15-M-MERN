import {Request , Response} from 'express';
import {User} from '../interfaces/user.interface'
import UserModel from '../models/user.model';
import {encrypt, verified} from '../utils/bcrypt.handle';

// const CreateUser = async (user: User) => {
// const InserCreateUser = await UserModel.create(user);
// return InserCreateUser;
// };




const getAlluser = async () => {
    const getUser = await UserModel.find({});
    return getUser;
};

const getUserbyId = async (id: string) => {
    const UserbyId = await UserModel.findOne({ _id: id });
    return UserbyId;
};

// {password}:User
// if (UpdateUserbyId) return "Usuario_actualizado";
//     const passHash = await encrypt(password);
//     const newpassword = await UserModel.create({
//         password:passHash,
//     });
//     return newpassword;


const UpdateUser = async (id:string, data: User) => {
    const UpdateUserbyId = await UserModel.findByIdAndUpdate({ _id: id}, data , {
        new: true,
    });
    return UpdateUserbyId;
};

const DeleteUser = async (id:string) => {
    const DeleteUserbyId = await UserModel.remove({ _id: id});
    return DeleteUserbyId;
};

export {getAlluser , getUserbyId, UpdateUser, DeleteUser};

// CreateUser