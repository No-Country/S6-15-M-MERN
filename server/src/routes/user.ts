import {Request , Response, Router} from 'express';
import { getControllerUserbyId,
    getControllerAllUser,
    UpdateControllerUser,
    DeleteControllerUser, getMyUser } from '../controllers/user';
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
router.post('/photo', checkJwt, )
router
    .route('/:id')
    .get( checkJwt ,  logMiddleware , getControllerUserbyId)


export {router}