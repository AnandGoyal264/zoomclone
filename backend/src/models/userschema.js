import {Schema} from 'mongoose';
import mongoose from 'mongoose';
const userschema=new Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
,
token:{
    type:String,
}
})
const User=mongoose.model("Users", userschema);
export  {User};