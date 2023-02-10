import { Request, Response, Router } from "express";
import {registerCtrl , loginCtrl} from '../controller/auth.controller'

const router = Router();

router.post('/register', registerCtrl); /* peticion de registro */
router.post('/login', loginCtrl); /* peticion de login */

export { router }