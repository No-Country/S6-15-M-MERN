import { Request, Response } from "express";
// import dbConnect from "../config/mongo";
import {
  CreateUser,
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
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getControllerAllUser = async (req: Request, res: Response) => {
  try {
    const response = await getAlluser();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const UpdateControllerUser = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await UpdateUser( id , body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const postControllerUser = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await CreateUser(body);
    res.send(responseUser);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

const DeleteControllerUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseDelete = await DeleteUser( id );
    res.send(responseDelete);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export {
  getControllerUserbyId,
  getControllerAllUser,
  UpdateControllerUser,
  postControllerUser,
  DeleteControllerUser,
};
