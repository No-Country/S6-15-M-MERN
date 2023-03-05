import {NextFunction , Request, Response } from "express";
// import dbConnect from "../config/mongo";
import {JwtPayload} from 'jsonwebtoken'
import {
  // CreateUser,
  getAlluser,
  getUserbyId,
  UpdateUser,
  DeleteUser,
  getAllProfessionalsService,
} from "../services/user";

import { deleteFilefromFS, getNewUrl } from '../utils/fs.handle';
import { handleHttp } from "../utils/error.handle";
import {RequestExt} from '../interfaces/req-ext';
import {IUser} from '../interfaces/user.interface';
import {AppError} from '../utils/errorObjectExtended';
import { encrypt } from "../utils/bcrypt.handle";
import { preferences, string } from "joi";


const getControllerUserbyId = async (req: Request, res: Response, next: NextFunction) => {
  const UserbyId = req.params.id
  try {
    // const { id } = params;
    const response = await getUserbyId(UserbyId);
    console.log(response)
    if (response) {
      res.status(200).json({user: response });
    } else {
      next(new AppError(400, `user width ID ${response} not found`));
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
    let filter: any = {};
    if(req.query.professional) filter.professional = req.query.professional;
    if(req.query.city) filter.city = req.query.city;
    if(req.query.job) filter.job = req.query.job;
    const responseGetUser = await getAlluser(filter);
    if(responseGetUser.length > 0) {
      return res.status(200).json({
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
    // const { id } = req.params;
      const User = await getUserbyId(id);
      if (User) {
        //!fix fileuser to delete files from storage
        // const fileuser = getNewUrl(req);
        // const (fileuser) {
          // if (fileuser) {
          //   deleteFilefromFS(User.avatarURL);  // que parte del interface user poner aqui??
          //   User.set({avatarURL: fileuser});
          // }
          const {avatarURL, password, ...restOfProperties} = req.body;
          //const passHash = await encrypt(password);
          User.set({  ...restOfProperties});
          const result = await User.save();
          return res.status(201).json(result);   
        } else {
          next(new AppError(404, `User with id ${User} not found`));
        }
    // res.send(response);
  } catch (error: any) {
    next(new AppError(500, error.message));
    // handleHttp(res, "ERROR_PUT_USER");
  };
};

const DeleteControllerUser = async (req: RequestExt, res: Response, next: NextFunction) => {
  // const userId = req.params.id;
  try {
    const userId = req.user?.id;
    const result: IUser | null = await DeleteUser(userId);
    // console.log(result)
    if (result) {
      //Delete user 
      //? Para acceder a esta funcion debe crearse el avatar con newUrl?
      //!Falta borrar la imagen que pertenece al usario que esta alojada en storage
      // if(result.avatarURL) deleteFilefromFS(result.avatarURL);
      // const deletefromusers = await DeleteUser(userId);
      // console.log("usuarios borrados ", deletefromusers);
      res.status(200).json({status: `User with ID ${userId} deleted`});
    } else {
      next(new AppError(404, `user width ID ${userId} not found.`));
    }
  } catch (error: any) {
    next(new AppError(500, error.message));
    // handleHttp(res, "ERROR_DELETE_USER");
  };
};

const DeleteUserById = async (req: Request, res: Response, next: NextFunction) => {
  // const userId = req.params.id;
  try {
    const {id} = req.params;
    const result: IUser | null = await DeleteUser(id);
    // console.log(result)
    if (result) {
      //Delete user 
      //? Para acceder a esta funcion debe crearse el avatar con newUrl?
      //!Falta borrar la imagen que pertenece al usario que esta alojada en storage
      // if(result.avatarURL) deleteFilefromFS(result.avatarURL);
      // const deletefromusers = await DeleteUser(userId);
      // console.log("usuarios borrados ", deletefromusers);
      res.status(200).json({status: `User with ID ${id} deleted`});
    } else {
      next(new AppError(404, `user width ID ${id} not found.`));
    }
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

const UpdatePhotoUser = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
      const id = req.user?.id;
      const User = await getUserbyId(id);

      //console.log({file: req.file, User, request: req})
      if (User) {
        const fileuser = getNewUrl(req, req.file);
        if (fileuser) {
          deleteFilefromFS(User.avatarURL.path || "", "storage/users/");  // que parte del interface user poner aqui??
        }
        if(req.file){
          const avatarURL = {
            name: req.file.filename,
            path: fileuser
          }
          User.set({avatarURL});
          const result = await User.save();
          return res.status(200).json(result);  
        }
        return res.status(400).json({message: "req.file not found"})
      } else {
        next(new AppError(404, `User with id ${User} not found`));
      }
    // res.send(response);
  } catch (error: any) {
    next(new AppError(500, error.message));
    // handleHttp(res, "ERROR_PUT_USER");
  };
};


const addProjectImagesUser = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const id = req.user?.id;
    const User = await getUserbyId(id);
    
    if (User) {
      const projectImages = User.projectImages;
      const imagesReq:any = req.files || [];
      if(!(imagesReq.length > 0)){
        return res.status(400).json({message: "Files not found"})
      }
      const projectObject = {
        name: "",
        path: ""
      }
      imagesReq.forEach((element:any) => {
        projectObject.name = element.filename;
        projectObject.path = getNewUrl( req, element) || "";
        projectImages.push(projectObject);
      });
      User.set({projectImages});
      const result = await User.save();
      res.status(200).json(result);  

    } else {
      next(new AppError(404, `User with id ${User} not found`));
    }
  // res.send(response);
} catch (error: any) {
  next(new AppError(500, error.message));
  // handleHttp(res, "ERROR_PUT_USER");
};
};

const DeleteProjectImages = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const id = req.user?.id;
    const { idImage } = req.params;
    const User = await getUserbyId(id);
    if (User) {
      const { projectImages } = User;
      if(!(projectImages.length > 0 )) {
        return next(new AppError(400, `user without Images`));
      }

      const image = projectImages.filter((e:any) => e.id === idImage);
      console.log({image})
      if(!(image.length > 0 )) {
        return next(new AppError(400, `image Id: ${idImage} doesn't exits in this User`));
      }

      const imagesArr = projectImages.filter((e:any) => e.id !== idImage);
      console.log({imagesArr})
      deleteFilefromFS(image[0].path || "", "storage/users/images/")

      User.set({projectImages: imagesArr});
      const result = await User.save();
      res.status(200).json({status: `Image: ${image[0].name} deleted`, user: result});
    } else {
      next(new AppError(404, `user width ID ${id} not found.`));
    }
  } catch (error: any) {
    next(new AppError(500, error.message));
  };
};

export {
  getControllerUserbyId,
  getControllerAllUser,
  UpdateControllerUser,
  DeleteControllerUser,
  getMyUser,
  UpdatePhotoUser,
  DeleteUserById,
  addProjectImagesUser,
  DeleteProjectImages
};
