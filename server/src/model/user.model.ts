
/*Modelo de usuario */

import {Schema , Types , model , Model} from 'mongoose'
import { User } from '../interface/user.interface';

const userSchema = new Schema<User>(
	{
		name: {
			type: String,
			required: [true, 'Please provide a valid name'],
		},
		// age: {
		// 	type: Number,
		// 	required: [true , 'Please enter your age'],
		// },
		email: {
			type: String,
			required: [true, 'Please enter your email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please enter your password'],
		},
        description: {
            type:String,
            default: 'Hola , Soy la Descripcion',
        },
		
	},
	{
		versionKey: false,
		timestamps: true ,
	},
);

const UserModel = model('User', userSchema);
export default UserModel;
