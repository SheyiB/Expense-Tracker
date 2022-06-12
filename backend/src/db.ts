import { connect } from 'mongoose';

const db = async() =>{
    await connect('mongodb://localhost:27017/spendingsApp');
}