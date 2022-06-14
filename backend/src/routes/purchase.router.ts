import express from "express";
import { createPurchase, deletePurchase,getAllPurchases,getPurchase, getUserPurchases, updatePurchase} from '../controllers/purchase.controller';

export const userRouter = express.Router();

userRouter.route('/').get(getAllPurchases).post(createPurchase);
userRouter.route('/:id').get(getPurchase).put(updatePurchase).delete(deletePurchase);

