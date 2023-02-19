import { Request, Response } from "express";
// import dbConnect from "../config/mongo";
import {JwtPayload} from 'jsonwebtoken'
import {
  // CreateUser,
  getAlluser,
  getUserbyId,
  UpdateUser,
  DeleteUser,
} from "../services/user";

import { handleHttp } from "../utils/error.handle";
import {RequestExt} from '../interfaces/req-ext'

const getControllerUserbyId = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getUserbyId( id );
    const data = response ? response : "NOT_FOUND";
    res.send(data);
    // res.send ({data:
    //   "Esto lo ven las personas que tengan una session activa, es decir un JWT Valido"
    // });
  } catch (e) {
    handleHttp(res, "ERROR_GET_USERBYID");
  }
};

const getControllerAllUser = async (req: Request, res: Response) => {
  try {
    const response = await getAlluser();
    res.send(response);
  //   res.send({data:"Esto lo ven las personas que esten logueadas JWT" , 
  //   user: req.user,
  // });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ALLUSER");
  }
};

const UpdateControllerUser = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await UpdateUser( id , body );
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_PUT_USER");
  }
};

// const postControllerUser = async ({ body }: Request, res: Response) => {
//   try {
//     const responseUser = await CreateUser(body);
//     res.send(responseUser);
//   } catch (e) {
//     handleHttp(res, "ERROR_GET_ITEM", e);
//   }
// };

const DeleteControllerUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseDelete = await DeleteUser( id );
    res.send(responseDelete);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_USER");
  }
};


const getMyUser = async ( req: RequestExt, res: Response) => {
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
