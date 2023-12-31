import express from 'express';
import userController from '../controllers/user.js';

const router = express.Router();

router.get('/:id', userController.userGet);
router.get('/', userController.userGetAll);
router.delete('/:id', userController.userDel);
router.delete('/', userController.userDelAll);
router.post('/', userController.userCreate);
router.put('/:id', userController.userUpdate);
router.post('/multiple', userController.userCreateMultiple);
router.put('/multiple', userController.userUpdateMultiple);
router.post('/signin',userController.signIn)

export default router;
