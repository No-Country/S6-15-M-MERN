/*Modelo de usuario */

import {Schema , Types , model , Model} from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
	{	
		name: {
			type: String,
			required: [true, 'Please provide a valid name'],
		},

		email: {
			type: String,
			required: [true, 'Please enter your email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please enter your password'],
		},
	},
	{
		versionKey: false,
		timestamps: true ,
	},
);

const UserModel = model('User', UserSchema);
export default UserModel;