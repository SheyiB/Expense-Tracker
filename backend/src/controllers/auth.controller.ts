import {AuthService} from '../services/auth.service';
import {Request, Response} from "express";

const auth = new AuthService();

export const signUp = async (req: Request, res: Response) =>{
    try{
        const user = await auth.signUp(req.body);
        return res.status(201).json(user)
    }  catch(e){
        return res.status(500).json(e.message)
    }
}

export const login = async (req: Request, res: Response) =>{
    try{
        const {user, token } = await auth.login(req.body);
        
        res.header('x-auth-token', token);
        return res.status(201).json(user);
    }  catch(e){
        if(e == 'FALSE-INFO!'){
            res.status(404).json('Invalid Information Supplied!')
        }
        else{
            return res.status(500).json(e)    
        }
        
    }
}
