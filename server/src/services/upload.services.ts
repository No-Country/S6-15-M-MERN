import { Storage } from "../interfaces/upload.interface";
import StorageModel from "../models/upload.model";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };