import { Router } from "express";
import { getFile } from "../controllers/upload.controller";
import multerMiddleware from "../middleware/upload.middleware";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("jobImage"), getFile);


export { router };