import {Request , Response, Router} from 'express';
import { getControllerUserbyId,
    getControllerAllUser,
    UpdateControllerUser,
    // postControllerUser,
    DeleteControllerUser, getMyUser, getAllProfessionals } from '../controllers/user';
import { logMiddleware } from '../middleware/log';
import {checkJwt} from '../middleware/session'

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

router.get("/professionals", getAllProfessionals)

router
    .route('/:id')
    .get( checkJwt ,  logMiddleware , getControllerUserbyId)


export {router}

// 63eff7181ce0afd348caf984

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImxhdmFyb0BnbWFpbC5jb20iLCJpYXQiOjE2NzY2ODQyMDcsImV4cCI6MTY3OTI3NjIwN30.CIMH7y9Eg9tchlvxve5Q9yttV_mJWaM_Kw2n0jd4ksc

// checkJwt,