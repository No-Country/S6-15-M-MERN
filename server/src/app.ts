import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

db().then(() => console.log("Conexion Ready"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to myAPI v1" });
});
app.get("*", (req, res) => {
  res.json({ message: "not found" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  res.status(statusCode).send({
    success: false,
    message: err.message,
    stack: err.stack
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
