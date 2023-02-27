import mongoose, { Schema } from "mongoose";
import { IJobModel } from "../interfaces/job.interface";

const JobsSchema: Schema = new Schema({
  service: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  jobImageUrl: { type: String },
  jobBannerUrl: {type: String}
});

export default mongoose.model<IJobModel>("Jobs", JobsSchema);
