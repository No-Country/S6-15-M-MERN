import mongoose, { Schema } from "mongoose";
import { ICategoryModel } from "../interfaces/category.interfaces";

const CategorySchema: Schema = new Schema({
  service: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  categoryUrl: { type: String, required: true }
});

export default mongoose.model<ICategoryModel>("Category", CategorySchema);
