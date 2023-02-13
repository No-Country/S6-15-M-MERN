import { Auth } from "./auth.interface";

export interface User extends Auth {
    name: string;
    birthdate:String;
    phonecontact: Number;
    country: String;
    city:String,
    terms: String,
    idgoogle: String,
    proveedor: String,
    avatarURL: String,
    job: String,
    postalCode: Number,
    minimumquantityprice: Number,
}