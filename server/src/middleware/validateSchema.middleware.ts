import Joi, { ObjectSchema } from "joi";
import { NextFunction, Response, Request } from "express";
import { User } from "../interfaces/user.interface";
import { ICategory } from "../interfaces/category.interfaces";

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  category: {
    create: Joi.object<ICategory>({
      service: Joi.string().required(),
      description: Joi.string().required(),
      categoryImageUrl: Joi.string()
    }),
    update: Joi.object<ICategory>({
      service: Joi.string(),
      description: Joi.string(),
      categoryImageUrl: Joi.string()
    })
  }
};
