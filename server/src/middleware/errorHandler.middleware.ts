import { Response, Request, NextFunction } from "express";
import { AppError } from "../utils/errorObjectExtended";

const errorHandler = (error: AppError, _req: Request, res: Response, _next: NextFunction) => {
  console.log("PASA POR ERROR HANDLER");
  res.header("Content-Type", "application/json");

  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({ error: error.message });
};

export default errorHandler;
