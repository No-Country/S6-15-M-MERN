import { Document } from "mongoose";

export interface IJob {
  service: String;
  title: String;
  description: String;
  jobImageUrl: string;
  jobBannerUrl: string;
}

// Extends document for others champs _id, etc
// Leave interface separated for validation purposes
export interface IJobModel extends IJob, Document {}
