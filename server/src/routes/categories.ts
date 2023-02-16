import { Router } from "express";
import controller from "../controllers/categories.controller";
import { ValidateSchema, Schemas } from "../middleware/validateSchema.middleware";

const router = Router();

router
  .route("/")
  .post(ValidateSchema(Schemas.category.create), controller.createCategory)
  .get(controller.getAllCategories);
router
  .route("/:categoryId")
  .get(controller.getCategoryById)
  .put(ValidateSchema(Schemas.category.update), controller.updateCategory)
  .delete(controller.deleteCategory);

export { router };
