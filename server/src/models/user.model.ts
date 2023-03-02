/*Modelo de usuario */
import { boolean } from "joi";
import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please provide a valid name"]
    },
    lastname: {
      type: String
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Please enter your password"]
    },
    birthdate: {
      type: String
    },
    phone: {
      type: String
    },
    country: {
      type: String
    },
    city: {
      type: String
    },
    terms: {
      type: String
    },
    idgoogle: {
      type: String,
    },
    avatarURL: {
      name: {type: String, default: ""},
      path: {type: String, default: ""},
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: "Jobs"
    },
    postalCode: {
      type: Number
    },
    /*cantindad minima precio*/
    minimumquantityprice: {
      type: Number,
      min: 0,
    },
    professional: {
      type: Boolean,
      default: false,
    },
    description: {
       type: String,
       default: ""
    },
    projectImages: [
      {
        name: {
          type: String
        },
        path: {
          type: String
        }
      }
    ]
    
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const UserModel = model("User", userSchema);

export default UserModel;
