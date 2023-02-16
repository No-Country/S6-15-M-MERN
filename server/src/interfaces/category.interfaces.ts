import { Document } from "mongoose";

export interface ICategory {
  service: String;
  description: String;
  categoryImageUrl: string;
}

// Extends document for others champs _id, etc
// Leave interface separated for validation purposes
export interface ICategoryModel extends ICategory, Document {}
