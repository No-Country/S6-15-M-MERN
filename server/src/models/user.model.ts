/*Modelo de usuario */
import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please provide a valid name"]
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },

    birthdate: {
      type: String,
    },

    phonecontact: {
      type: Number,
    },

    country: {
      type: String,
    },

    city: {
      type: String,
    },

    terms: {
      type: String,
    },

    idgoogle: {
      type: String,
    },

    proveedor: {
      type: String,
    },

    avatarURL: {
      type: String,
      // required: [true, "Please provide an img url"]
    },

    job: {
      type: Schema.Types.ObjectId,
      ref: "Jobs",
    },

    postalCode: {
      type: Number,
    },

    /*cantindad minima precio*/
    minimumquantityprice: {
      type: Number,
      min: 0
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const UserModel = model("User", userSchema);

export default UserModel;
