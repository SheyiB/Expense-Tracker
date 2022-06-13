import { connect } from 'mongoose';

export const db = async() =>{
    await connect('mongodb://localhost:27017/spendingsApp');

    console.log(`Server Running on ${process.env.PORT}`)
}