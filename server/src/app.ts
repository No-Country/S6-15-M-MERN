import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
import bodyParser from "body-parser";

import errorHandler from "./middleware/errorHandler.middleware";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN_APP,
    credentials: true
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

db().then(() => console.log("Conexion Ready"));

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to myAPI v1" });
});

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
