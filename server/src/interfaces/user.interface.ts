import { Auth } from "./auth.interface";
import { Schema } from "mongoose";

export interface User extends Auth {
  name: string;
  birthdate: String;
  phonecontact: Number;
  country: String;
  city: String;
  terms: String;
  idgoogle: String;
  proveedor: String;
  avatarURL: String;
  job: {
    type: Schema.Types.ObjectId;
    ref: "Categories";
  };
  postalCode: Number;
  minimumquantityprice: Number;
}
