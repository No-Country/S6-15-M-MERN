import { Auth } from "./auth.interface";
import { Schema } from "mongoose";
import {Document} from 'mongoose';

export interface IUser extends Auth {
  name: string,
  lastname: string,
  birthdate: String,
  phone: String,
  country: String,
  city: String,
  terms: String,
  reviews: String,
  profilepic:String,
  message:String,
  valoracion: Number,
  profession: String,
  pictures:String,
  idgoogle: String,
  proveedor: String,
  avatarURL: any,
  job: {
    type: Schema.Types.ObjectId;
    ref: "Jobs";
  };
  postalCode: Number;
  minimumquantityprice: Number;
  professional: Boolean;
  description: String;
  projectImages: any;
}

export interface UserModel extends IUser, Document {}


// "profesionales": [
//   {
//     "nombre": "nombre1",
//     "apellido": "apellido1",
//     "telefono": "telefono1",
//     "mail": "mail1",
//     "provincia": "Buenos Aires",
//     "ciudad": "Capital",
//     "valoracion": 2,
//     "reviews": ["sdafasfdafs", "sadfsfdasdf"],
//     "mensajes": [{"remitente": "SDFASFD", "mensaje":"asdadsff"}, {"remitente": "SDFASFD", "mensaje":"asdadsff"}],
//     "profilePic": "url:asdfsdfa",
//     "pictures": [],
//     "profesion":"Descripcion",
//   },
//   {

//       description: {
//     type: String,
//     default: "Soy la descripcion",
//   },
//     "nombre": "nombre2",
//     "apellido": "apellido2",
//     "telefono": "telefono2",
//     "mail": "mail2",
//     "provincia": "Córdoba",
//     "ciudad": "Córdoba",
//     "valoracion": 2,
//     "reviews": ["sdafasfdafs", "sadfsfdasdf"],
//     "mensajes": [{"remitente": "SDFASFD", "mensaje":"asdadsff"}, {"remitente": "SDFASFD", "mensaje":"asdadsff"}],
//     "profilePic": "url:asdfsdfa",
//     "pictures": []
//   }
// ]
