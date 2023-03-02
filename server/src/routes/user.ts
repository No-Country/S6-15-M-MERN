import {Request , Response, Router} from 'express';
import multer from 'multer';
import { getControllerUserbyId,
    getControllerAllUser,
    UpdateControllerUser,
    DeleteControllerUser, getMyUser, UpdatePhotoUser, DeleteUserById, addProjectImagesUser, DeleteProjectImages } from '../controllers/user';
import { logMiddleware } from '../middleware/log';
import {checkJwt} from '../middleware/session'
import multerMiddleware from "../middleware/upload.middleware";

const router = Router();

/**
 * Post track
 * @openapi
 * /user:
 *   get:
 *     summary: Returns a list of users.
 *     description: Optional extended description in CommonMark or HTML
 *     responses:
 *       '200':
 *          description: A JSON array of user names
 *          content:
 *            application/json:
 *              schema: 
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    example: ok
 *                  data:
 *                    type: array
 *                    items: 
 *                      $ref: "#/components/schemas/user" 
 *                  
 */

router.get('/' , getControllerAllUser);

router
    .route('/me')
    .get(checkJwt , getMyUser)
    .put( checkJwt, UpdateControllerUser)
    .delete(checkJwt, DeleteControllerUser)

router
    .route('/photo')
    .post( checkJwt, multerMiddleware.single("avatar"), UpdatePhotoUser)
    // .put( checkJwt, multerMiddleware.single("avatar"), UpdatePhotoUser)

router
    .route('/images')
    .put( checkJwt, multerMiddleware.array("images", 10), addProjectImagesUser)

router
    .route('/images/:idImage')
    .delete( checkJwt, DeleteProjectImages)
       
router
    .route('/:id')
    .get( checkJwt ,  logMiddleware , getControllerUserbyId)
    .delete( checkJwt ,  logMiddleware , DeleteUserById)


export {router}