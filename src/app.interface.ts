import { Document } from 'mongoose';

export interface ITodos extends Document{
    readonly id:string;
    readonly description:string;
}