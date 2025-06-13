import {User} from "../models/userschema.js"
import httpStatus from "http-status"
import bcrypt ,{hash} from "bcryptjs";
import crypto from "crypto";
const login=async (req,res)=>{
    let {username, password}=req.body;
    if (!username|| !password){
        return res.stauts(400).json({message:"please provide details"});
    }
    try{
        const userfind=await User.findOne({username});
        if (!userfind){
            res.status(httpStatus.NOT_FOUND).json({message:"username not found"});
        }
        let ispassword=await bcrypt.compare(password, userfind.password);
        if (ispassword){
            let token=crypto.randomBytes(20).toString("hex");
            userfind.token=token;
            await userfind.save();
            return res.status(httpStatus.OK).json({message:'user login succesuly ',token:token});

        }
        else{
            return res.status(httpStatus.UNAUTHORIZED).json({message:"invalid password"});
        }
    }
    catch(e){
        return res.status(500).json({message:`something went wrong${e}`});
    }

}
const register=async (req,res)=>{
  console.log(req.body);

  let{name, username,password }=req.body;

  console.log("register called backend controllers")
  try{
    const extinguisher=await User.findOne({username});
    if (extinguisher){
        return res.status(httpStatus.FOUND).json({message:
            "useralreadyexist"
        })
    }
    const hashedpassword=await bcrypt.hash(password,10);
    const newuser=new User({
        name:name,
        username:username,
        password:hashedpassword,
    })
    const newUsersave=await newuser.save();
    return res.status(httpStatus.CREATED).json({message:"user registered successfully"})
  }
  catch(err){
    console.log(err);
  return   res.json({message:`something went wrong${err}`})
  }
}
export {register , login} 