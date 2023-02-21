import {Request , Response, Router} from 'express';
import { getControllerUserbyId,
    getControllerAllUser,
    UpdateControllerUser,
    // postControllerUser,
    DeleteControllerUser, getMyUser } from '../controllers/user';
import { logMiddleware } from '../middleware/log';
import {checkJwt} from '../middleware/session'

const router = Router();

router.get('/', checkJwt , getControllerAllUser);

router
    .route('/me')
    .get(checkJwt , getMyUser)
    .put( checkJwt, UpdateControllerUser)

router
    .route('/:id')
    .get( checkJwt ,  logMiddleware , getControllerUserbyId)
    .delete(checkJwt, DeleteControllerUser)


export {router}

// 63eff7181ce0afd348caf984

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImxhdmFyb0BnbWFpbC5jb20iLCJpYXQiOjE2NzY2ODQyMDcsImV4cCI6MTY3OTI3NjIwN30.CIMH7y9Eg9tchlvxve5Q9yttV_mJWaM_Kw2n0jd4ksc

// checkJwt,