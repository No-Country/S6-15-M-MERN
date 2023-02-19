import { Request } from "express";
import fs from "fs";

const SERVER_IMAGES_DIR = "storage";

// Erase file from temporary directory images
const deleteFilefromFS = (filepath: string) => {
  // Getting name of directory
  const filename = filepath.split(`/${SERVER_IMAGES_DIR}`)[1] || "";
  return fs.access(`${SERVER_IMAGES_DIR}/${filename}`, fs.constants.R_OK, err => {
    if (err) {
      console.error("No Read access:", err.message);
    } else {
      fs.unlink(`${SERVER_IMAGES_DIR}/${filename}`, error => {
        console.log("error ", error);
      });
    }
  });
};

const getNewUrl = (req: Request) => {
  if (req.file) {
    return `${req.protocol}://${req.get("host")}/storage/${req.file.filename}`;
  } else {
    return false;
  }
};

export { deleteFilefromFS, getNewUrl };
