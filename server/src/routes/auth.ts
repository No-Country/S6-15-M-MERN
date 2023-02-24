import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth.controller";
import { googleLoginCtrl } from "../controllers/google.controller";

const router = Router();

router.post("/register", registerCtrl); /* peticion de registro */
router.post("/login", loginCtrl); /* peticion de login */
router.post("/google", googleLoginCtrl); /* peticion de google */

export { router };
