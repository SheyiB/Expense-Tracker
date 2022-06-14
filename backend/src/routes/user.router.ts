import express from "express";
import {createUser, deleteUser, getAllUsers, getUser, updateUser} from '../controllers/user.controller';
import {purchaseRouter} from './purchase.router';

export const userRouter = express.Router();

userRouter.use('/purchase', purchaseRouter)

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).put(updateUser).delete(deleteUser);


