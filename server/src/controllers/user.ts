import {NextFunction , Request, Response } from "express";
// import dbConnect from "../config/mongo";
import {JwtPayload} from 'jsonwebtoken'
import {
  // CreateUser,
  getAlluser,
  getUserbyId,
  UpdateUser,
  DeleteUser,
} from "../services/user";

import { deleteFilefromFS, getNewUrl } from '../utils/fs.handle';
import { handleHttp } from "../utils/error.handle";
import {RequestExt} from '../interfaces/req-ext';
import {IUser} from '../interfaces/user.interface';
import {AppError} from '../utils/errorObjectExtended';


const getControllerUserbyId = async (req: Request, res: Response, next: NextFunction) => {
  const UserbyId = req.params.userId
  try {
    // const { id } = params;
    const response = await getUserbyId(  UserbyId );
    if (response) {
      res.status(200).json({user: UserbyId });
    } else {
      next(new AppError(400, `user width ID ${UserbyId} not found`));
    }
    // const data:IUser = response ? response : "NOT_FOUND";
    // res.status(201).json({userid:data.userId})
    
        // res.send(data);
    // res.send ({data:
    //   "Esto lo ven las personas que tengan una session activa, es decir un JWT Valido"
    // });
  } catch (error:any) {
    // handleHttp(res, "ERROR_GET_USERBYID");
    next(new AppError(500, error.message));
  };
};

const getControllerAllUser = async (req: Request, res: Response , next: NextFunction) => {
  try {
    const responseGetUser = await getAlluser();
    if(responseGetUser.length > 0) {
      return res.status(201).json({
        status: 'success',
        responseGetUser,
      }); 
    } else {
      next(new AppError(404, "No hay usuarios para mostrar"));
    }
    // res.send(response);
  //   res.send({data:"Esto lo ven las personas que esten logueadas JWT" , 
  //   user: req.user,
  // });
  } catch (error:any) {
    next(new AppError(500, error.message));
  //   handleHttp(res, "ERROR_GET_ALLUSER");
  // }
  };
};

const UpdateControllerUser = async (
  req: RequestExt, res: Response, next: NextFunction) => {
    // const userId = req.params.IUser;

    try {
      const id = req.user?.id;
    // const { id } = params;
    const User = await getUserbyId(id);
    if (User) {
      const fileuser = getNewUrl(req);
      // const (fileuser) {
        if (fileuser) {
          deleteFilefromFS(User.avatarURL);  // que parte del interface user poner aqui??
          User.set({avatarURL: fileuser});
        }

        User.set({ ...req.body});
        const result = await User.save();
        return res.status(201).json(result);   
      } else {
        next(new AppError(404, `Job with id ${User} not found`));
      }
    // res.send(response);
  } catch (error: any) {
    next(new AppError(500, error.message));
    // handleHttp(res, "ERROR_PUT_USER");
  };
};

// const postControllerUser = async ({ body }: Request, res: Response) => {
//   try {
//     const responseUser = await CreateUser(body);
//     res.send(responseUser);
//   } catch (e) {
//     handleHttp(res, "ERROR_GET_ITEM", e);
//   }
// };

const DeleteControllerUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.id;
  try {
    // const { id } = params;
    const result: IUser | null = await DeleteUser(userId);

    if (result) {
      //Delete user 
      deleteFilefromFS(result.avatarURL);

      const deletefromusers = await DeleteUser(userId);
      console.log("usuarios borrados ", deletefromusers);
      return res.status(200).json(result);
    } else {
      next(new AppError(404, `user width ID ${userId} not found.`));
    }
    // const responseDelete = await DeleteUser( id );
    // res.status(204).json({
    //   status: 'deleted',
    //   responseDelete,
    // })
    // res.send(responseDelete);
  } catch (error: any) {
    next(new AppError(500, error.message));
    // handleHttp(res, "ERROR_DELETE_USER");
  };
};


const getMyUser = async ( req: RequestExt, res: Response, next: NextFunction) => {
  try {
    // console.log(req.user)
    const id = req.user?.id;
    const response = await getUserbyId( id );
    const data = response ? response : "NOT_FOUND";
    res.send(data);
    // res.send ({data:
    //   "Esto lo ven las personas que tengan una session activa, es decir un JWT Valido"
    // });
  } catch (e) {
    handleHttp(res, "ERROR_GET_USER");
  }
};

export {
  getControllerUserbyId,
  getControllerAllUser,
  UpdateControllerUser,
  // postControllerUser,
  DeleteControllerUser,
  getMyUser,
};
