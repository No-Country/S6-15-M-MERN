import Joi, { ObjectSchema } from "joi";
import { NextFunction, Response, Request } from "express";
import { IJob } from "../interfaces/job.interface";
import { deleteFilefromFS } from "../utils/fs.handle";

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      console.log("respuesta", req.body, " files: ", req.files);
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      // Agregando borrado de imagenes
      if (req.file) {
        const jobImageUrl = `${req.protocol}://${req.get("host")}/storage/${req.file.filename}`;
        deleteFilefromFS(jobImageUrl, "storage/jobs/image/");
      }
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  jobs: {
    create: Joi.object<IJob>({
      service: Joi.string().min(3).max(30).required(),
      title: Joi.string(),
      description: Joi.string().min(3).max(150).required()
    }),
    update: Joi.object<IJob>({
      service: Joi.string().min(3).max(30),
      title: Joi.string(),
      description: Joi.string().min(3).max(150)
    })
  }
};
