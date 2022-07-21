import express from "express";
import { createPurchase, deletePurchase,getAllPurchases,getPurchase, updatePurchase} from '../controllers/purchase.controller';
import {protect} from "../middlewares/auth";


export const purchaseRouter = express.Router();

purchaseRouter.route('/', protect).get(getAllPurchases).post(createPurchase);
purchaseRouter.route('/:id', protect).get(getPurchase).put(updatePurchase).delete(deletePurchase);

