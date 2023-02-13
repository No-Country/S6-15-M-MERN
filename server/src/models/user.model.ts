
/*Modelo de usuario */

import {Schema , Types , model , Model} from 'mongoose'
import { User } from '../interfaces/user.interface';

const userSchema = new Schema<User>(
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

		birthdate: {
			type:String,
			required: true,
		},

		phonecontact: {
			type:Number,
			required: true,
		},

		country: {
			type:String,
			required: true,
		},

		city: {
			type:String,
			required: true,
		},
		
		terms: {
			type: String, 
			required: false,
		}, 

		idgoogle: {
			type:String,
			required: true,
		},

		proveedor: {
			type:String,
			required: true,
		},

		avatarURL:{
				type: String,
				required: [true, 'Please provide an img url'],
		},

		job: {
			type:String,
			required: true,
		},
		
		postalCode: {
			type:Number,
			required: true,
		},

		/*cantindad minima precio*/
		minimumquantityprice : {
			type:Number,
			required:true,
			min:0,
		},
		
	},
	{
		versionKey: false,
		timestamps: true ,
	},
);

const UserModel = model('User', userSchema);
export default UserModel;
