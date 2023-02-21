import { Auth } from "./auth.interface";
import { Schema } from "mongoose";
import {Document} from 'mongoose';

export interface IUser extends Auth {
  name: string;
  birthdate: String;
  phonecontact: Number;
  country: String;
  city: String;
  terms: String;
  idgoogle: String;
  proveedor: String;
  avatarURL: string;
  job: {
    type: Schema.Types.ObjectId;
    ref: "Jobs";
  };
  postalCode: Number;
  minimumquantityprice: Number;
}

export interface UserModel extends IUser, Document {}
