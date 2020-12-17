import * as mongoose from 'mongoose';

export const todoSchema = new mongoose.Schema({
    description:String,
});