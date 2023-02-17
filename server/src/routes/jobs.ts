import { Router } from "express";
import controller from "../controllers/job.controller";
import { ValidateSchema, Schemas } from "../middleware/validateSchema.middleware";
import multerMiddleware from "../middleware/upload.middleware";

const router = Router();

router
  .route("/")
  .post(
    multerMiddleware.single("myfile"),
    ValidateSchema(Schemas.jobs.create),
    controller.createJob
  )
  .get(controller.getAllJobs);
router
  .route("/:jobId")
  .get(controller.getJobById)
  .put(multerMiddleware.single("myfile"), ValidateSchema(Schemas.jobs.update), controller.updateJob)
  .delete(controller.deleteJob);

export { router };
