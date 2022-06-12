import { Schema, model } from 'mongoose';

export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    dob: Date;
    phone: number;
    cash: number;
    password: string;
}

const userSchema = new Schema<IUser>({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    dob: {type: Date, required: true},
    phone: {type: Number, required: true},
    cash: {type: Number, required: true, default: 0},
    password: {type: String, required: true}
},
{
    timestamps: true
})

export const User = model<IUser>('User', userSchema)
