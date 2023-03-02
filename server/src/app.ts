import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
import bodyParser from "body-parser";

import path from 'path'

import errorHandler from "./middleware/errorHandler.middleware";

import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./doc/swagger"

const PATH_STORAGE = `${process.cwd()}/storage`;
console.log(PATH_STORAGE)
const PORT = process.env.PORT || 3001;
const app = express();

// app.use(
//   cors({
//     origin: process.env.ORIGIN_APP,
//     credentials: true
//   })
// );
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

db().then(() => console.log("Conexion Ready"));

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to myAPI v1" });
});

app.use('/storage', express.static(PATH_STORAGE))

app.get("*", (_req: Request, res: Response) => {
  res.status(404).json({ message: "not found" });
});


app.use(errorHandler);

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   const statusCode = 500;
//   res.status(statusCode).send({
//     success: false,
//     message: err.message,
//     stack: err.stack
//   });
// });

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
