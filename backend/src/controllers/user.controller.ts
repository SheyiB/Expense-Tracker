import {UserService} from '../services/user.service';
import {Request, Response} from "express";

const User = new UserService();

export const createUser = async (req: Request, res: Response) =>{
    try{
        const user = await User.createUser(req.body);
        res.status(201).json(user)
    }  catch(e){
        res.status(500).json(e.message)
    }
}

export const getAllUsers = async (req: Request, res: Response) =>{
    try{
        const user = await User.getAllUser();
        res.status(200).json(user)
    }  catch(e){
        res.status(500).json(e)
    }
}

export const getUser = async (req: Request, res: Response) =>{
    try{
        const user = await User.getUser(req.params.id);
        res.status(200).json(user)
    }  catch(e){
        res.status(500).json(e)
    }
}

export const updateUser = async (req: Request, res: Response) =>{
    try{
        const user = await User.updateUser(req.params.id, req.body);
        res.status(200).json(user)
    }  catch(e){
        res.status(500).json(e)
    }
}

export const deleteUser = async (req: Request, res: Response) =>{
    try{
        const user = await User.deleteUser(req.params.id);
        res.status(204).json({data: user})
    }  catch(e){
        res.status(500).json(e)
    }
}