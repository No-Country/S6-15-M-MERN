import Job from "../models/job.model";
import User from "../models/user.model";

const findAllJobsService = () => Job.find();

const createJobService = (
  service: string,
  title: string,
  description: string,
  jobImageUrl: string
) => {
  return new Job({
    service,
    title,
    description,
    jobImageUrl
  }).save();
};

const getJobService = (jobId: string) => Job.findById(jobId);

const deleteJobService = (jobId: string) => Job.findByIdAndDelete(jobId);

const deleteServiceFromUsers = (jobId: string) => {
  return User.updateMany({ $pull: { Job: { _id: jobId } } });
};

export {
  findAllJobsService,
  deleteServiceFromUsers,
  createJobService,
  getJobService,
  deleteJobService
};
