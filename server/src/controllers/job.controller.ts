import { NextFunction, Request, Response } from "express";
import { IJob } from "../interfaces/job.interface";
import {
  createJobService,
  findAllJobsService,
  getJobService,
  deleteJobService,
  deleteServiceFromUsers
} from "../services/jobs.services";
import { deleteFilefromFS, getNewUrl } from "../utils/fs.handle";
import { AppError } from "../utils/errorObjectExtended";

// Create a new job category
const createJob = async (req: Request, res: Response, next: NextFunction) => {
  const { service, title, description } = req.body;
  const jobImageUrl = getNewUrl(req, req.file);
  if (jobImageUrl) {
    // Getting file name
    try {
      const newjob = await createJobService(service, title, description, jobImageUrl);
      res.status(201).json({ job: newjob });
    } catch (error: any) {
      next(new AppError(400, error.message));
    }
  } else {
    next(new AppError(400, "No image sent and it is required"));
  }
};

// Get a job category by Id
const getJobById = async (req: Request, res: Response, next: NextFunction) => {
  const jobId = req.params.jobId;
  try {
    const jobFounded = await getJobService(jobId);
    if (jobFounded) {
      res.status(200).json({ job: jobFounded });
    } else {
      next(new AppError(400, `Job width ID ${jobId} not found`));
    }
  } catch (error: any) {
    next(new AppError(500, error.message));
  }
};

// Get all jobs categories
const getAllJobs = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const jobs = await findAllJobsService();
    if (jobs.length > 0) {
      return res.status(200).json({ jobs });
    } else {
      next(new AppError(404, "No jobs to show"));
    }
  } catch (error: any) {
    next(new AppError(500, error.message));
  }
};

// Upate a category job
const updateJob = async (req: Request, res: Response, next: NextFunction) => {
  const jobId = req.params.jobId;

  try {
    // find the data to update
    const jobFounded = await getJobService(jobId);
    if (jobFounded) {
      const filename = getNewUrl(req, req.file);
      if (filename) {
        deleteFilefromFS(jobFounded.jobImageUrl, "storage/jobs/image/");  //aqui el jobImageurl me redirije a la interface, en el caso de interface user , cual escojo?
        jobFounded.set({ jobImageUrl: filename });
      }

      jobFounded.set({ ...req.body });
      const result = await jobFounded.save();
      return res.status(200).json(result);
    } else {
      next(new AppError(404, `Job with id ${jobId} not found`));
    }
  } catch (error: any) {
    next(new AppError(500, error.message));
  }
};

// Delete a job category, the image from server associated, and remove it from the users who has this job category
const deleteJob = async (req: Request, res: Response, next: NextFunction) => {
  const jobId = req.params.jobId;
  try {
    const result: IJob | null = await deleteJobService(jobId);

    if (result) {
      // Delete image from server
      deleteFilefromFS(result.jobImageUrl, "storage/jobs/image/");

      // Delete jobs category from users
      const deletefromusers = await deleteServiceFromUsers(jobId);
      console.log("usuarios borrados ", deletefromusers);
      return res.status(200).json(result);
    } else {
      next(new AppError(404, `Job width ID ${jobId} not found.`));
    }
  } catch (error: any) {
    next(new AppError(500, error.message));
  }
};

export default {
  createJob,
  getJobById,
  getAllJobs,
  updateJob,
  deleteJob
};
