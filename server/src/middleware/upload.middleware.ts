import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    if ( file.fieldname === "avatar" ) { 
      cb(null, PATH_STORAGE+ '/users');
    } else if ( file.fieldname === "images"){
      cb(null, PATH_STORAGE+ '/users/images');
    } else if ( file.fieldname === "jobImage" ) {
      cb(null, PATH_STORAGE+ '/jobs/image');
    } else if ( file.fieldname === "jobBanner"){
      cb(null, PATH_STORAGE+ '/jobs/banner');
    } 
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  }
});

// Filtering MIMETYPES
const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"||
    file.mimetype === "image/gif"||
    file.mimetype === "image/webp" 
  ) {
    cb(null, true);
  } else {
    // req.mimetypeError = true; // to know if an mimetype error was produced.
    // cb(null, false);
    cb(new Error('Image type not supported'), false)
  }
};


const multerMiddleware = multer({ storage, fileFilter });

export default multerMiddleware;
