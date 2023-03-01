import { Request } from "express";
import fs from "fs";

const SERVER_IMAGES_DIR = "storage/users/";

// Erase file from temporary directory images
const deleteFilefromFS = (filepath: string) => {
  // Getting name of directory
  const test = filepath.split(`${SERVER_IMAGES_DIR}`);
  const filename = filepath.split(`${SERVER_IMAGES_DIR}`)[1] || "";
  console.log({filename, test})

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
    if(req.file.fieldname === 'avatar') {
      const path = `${req.protocol}://${req.get("host")}/storage/users/${req.file.filename}`;
      console.log({path})
      return path;
    }
      
    if(req.file.fieldname === 'jobImage') `${req.protocol}://${req.get("host")}/storage/${req.file.filename}`;
    if(req.file.fieldname === 'jobBanner') `${req.protocol}://${req.get("host")}/storage/${req.file.filename}`;
  } else {
    return false;
  }
};

export { deleteFilefromFS, getNewUrl };
