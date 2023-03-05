import { Request } from "express";
import fs from "fs";

// const folder = "storage/users/";

// Erase file from temporary directory images
const deleteFilefromFS = (filepath: string, folder: string) => {
  // Getting name of directory
  console.log({folder, filepath})
  const test = filepath.split(`${folder}`);
  const filename = filepath.split(`${folder}`)[1] || "";
  console.log({filename, test})

  return fs.access(`${folder}/${filename}`, fs.constants.R_OK, err => {
    if (err) {
      console.error("No Read access:", err.message);
    } else {
      fs.unlink(`${folder}/${filename}`, error => {
        console.log("error ", error);
      });
    }
  });
};

const getNewUrl = (req: Request, file: any) =>{
  
  if (file) {
    if(file.fieldname === 'avatar') {
      const path = `${req.protocol}://${req.get("host")}/storage/users/${file.filename}`;
      console.log({path})
      return path;
    }
    if(file.fieldname === 'images') {
      const path = `${req.protocol}://${req.get("host")}/storage/users/images/${file.filename}`;
      console.log({path})
      return path;
    }
    if(file.fieldname === 'jobImage') `${req.protocol}://${req.get("host")}/storage/${file.filename}`;
    if(file.fieldname === 'jobBanner') `${req.protocol}://${req.get("host")}/storage/${file.filename}`;
  } else {
    return false;
  }
};

export { deleteFilefromFS, getNewUrl };
