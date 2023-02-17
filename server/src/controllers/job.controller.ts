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

// Create a new job category
const createJob = async (req: Request, res: Response, _next: NextFunction) => {
  const { service, description } = req.body;
  const jobImageUrl = getNewUrl(req);
  if (jobImageUrl) {
    // Getting file name
    try {
      const newjob = await createJobService(service, description, jobImageUrl);
      res.status(201).json({ job: newjob });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(400).json({ error: "No image sent and it is required" });
  }
};

// Get a job category by Id
const getJobById = async (req: Request, res: Response, _next: NextFunction) => {
  const jobId = req.params.jobId;
  try {
    const jobFounded = await getJobService(jobId);
    if (jobFounded) {
      res.status(200).json({ job: jobFounded });
    } else {
      res.status(404).json({ message: `Job width ID ${jobId} not found` });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get all jobs categories
const getAllJobs = async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const jobs = await findAllJobsService();
    if (jobs.length > 0) {
      return res.status(200).json({ jobs });
    } else {
      return res.status(404).json({ message: "No jobs to show" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Upate a category job
const updateJob = async (req: Request, res: Response, _next: NextFunction) => {
  const jobId = req.params.jobId;

  try {
    // find the data to update
    const jobFounded = await getJobService(jobId);
    if (jobFounded) {
      const filename = getNewUrl(req);
      if (filename) {
        deleteFilefromFS(jobFounded.jobImageUrl);
        jobFounded.set({ jobImageUrl: filename });
      }

      jobFounded.set({ ...req.body });
      const result = await jobFounded.save();
      console.log("result updated: ", result);
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ message: `Job with id ${jobId} not found` });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Delete a job category, the image from server associated, and remove it from the users who has this job category
const deleteJob = async (req: Request, res: Response, _next: NextFunction) => {
  const jobId = req.params.jobId;
  try {
    const result: IJob | null = await deleteJobService(jobId);

    if (result) {
      // Delete image from server
      deleteFilefromFS(result.jobImageUrl);

      // Delete jobs category from users
      const deletefromusers = await deleteServiceFromUsers(jobId);
      console.log("usuarios borrados ", deletefromusers);
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ message: `Job width ID ${jobId} not found.` });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default {
  createJob,
  getJobById,
  getAllJobs,
  updateJob,
  deleteJob
};
