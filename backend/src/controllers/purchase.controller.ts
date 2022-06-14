import {PurchaseService} from '../services/purchase.service';
import {Request, Response} from "express";

const Purchase = new PurchaseService();

export const createPurchase = async (req: Request, res: Response) =>{
    try{
        const purchase = await Purchase.createPurchase(req.body);
        res.status(201).json(purchase)
    }  catch(e){
        res.status(500).json(e.message)
    }
}

export const getAllPurchases = async (req: Request, res: Response) =>{
    try{
        const purchase = await Purchase.getAllPurchase();
        res.status(200).json(purchase)
    }  catch(e){
        res.status(500).json(e)
    }
}

export const getUserPurchases = async (req: Request, res: Response) =>{
    try{
        const purchase = await Purchase.getUserPurchase(req.body.userid);
        res.status(200).json(purchase)
    }  catch(e){
        res.status(500).json(e)
    }
}

export const getPurchase = async (req: Request, res: Response) =>{
    try{
        const purchase = await Purchase.getPurchase(req.params.id);
        res.status(200).json(purchase)
    }  catch(e){
        res.status(500).json(e)
    }
}

export const updatePurchase = async (req: Request, res: Response) =>{
    try{
        const purchase = await Purchase.updatePurchase(req.params.id, req.body);
        res.status(200).json(purchase)
    }  catch(e){
        res.status(500).json(e)
    }
}

export const deletePurchase = async (req: Request, res: Response) =>{
    try{
        const purchase = await Purchase.deletePurchase(req.params.id);
        res.status(204).json({data: purchase})
    }  catch(e){
        res.status(500).json(e)
    }
}