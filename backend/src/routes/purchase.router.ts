import express from "express";
import { createPurchase, deletePurchase,getAllPurchases,getPurchase, getUserPurchases, updatePurchase} from '../controllers/purchase.controller';

export const purchaseRouter = express.Router();

purchaseRouter.route('/').get(getAllPurchases).post(createPurchase);
purchaseRouter.route('/:id').get(getPurchase).put(updatePurchase).delete(deletePurchase);

