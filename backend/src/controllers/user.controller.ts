import {UserService} from '../services/user.service';
import {Request, Response} from "express";

const User = new UserService();

export const createUser = async (req: Request, res: Response) =>{
    try{
        const user = await User.createUser(req.body);
        res.status(201).json(user)
    }  catch(e){
        res.status(500).send(e)
    }
}