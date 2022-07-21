import express from "express";
import {createUser, deleteUser, getAllUsers, getUser, updateUser} from '../controllers/user.controller';
import {purchaseRouter} from './purchase.router';

import {protect} from "../middlewares/auth";

export const userRouter = express.Router();

userRouter.use('/purchase', purchaseRouter)

userRouter.route('/', protect).get(getAllUsers).post(createUser);
userRouter.route('/:id', protect).get(getUser).put(updateUser).delete(deleteUser);


