import {Router} from 'express'
import * as usersCtrl from '../controllers/users.controller.js';
const router = Router();

// router.post('/user',[authJwt.verifyToken,authJwt.isAdmin],usersCtrl.createUser);
router.post('/user',usersCtrl.createUser);
router.post('/user/:userId',usersCtrl.createUser);
router.post('/register/',usersCtrl.RegisterUser);
router.post('/locked/',usersCtrl.lockedUser);
router.post('/unlocked/',usersCtrl.unlockedUser);
router.get('/',usersCtrl.getUsers);
router.get('/user/:userId',usersCtrl.getUserById);
router.get('/user/core/:coreId',usersCtrl.getUserByCore);
router.put('/:userId',usersCtrl.updateUserById);
router.delete('/user/:userId',usersCtrl.deleteUserById);

export default router;