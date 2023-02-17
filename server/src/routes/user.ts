import {Request , Response, Router} from 'express';
import { getControllerUserbyId,
    getControllerAllUser,
    UpdateControllerUser,
    postControllerUser,
    DeleteControllerUser, } from '../controllers/user';
import { logMiddleware } from '../middleware/log';
import {checkJwt} from '../middleware/session'

const router = Router();

router.get('/', checkJwt, getControllerAllUser);
router.get('/:id', logMiddleware , getControllerUserbyId);
router.post('/Createuser', postControllerUser);
router.put('/:id', UpdateControllerUser);
router.delete('/:id', DeleteControllerUser);

export {router}