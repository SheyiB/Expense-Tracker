import express from "express";
import { login, signUp} from '../controllers/auth.controller';

export const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/signUp', signUp);

