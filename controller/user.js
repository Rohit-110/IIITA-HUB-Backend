import { User} from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";
import jwt from "jsonwebtoken";


export const register = async(req,res)=>{
    const {name, email, password, mobile}=req.body;
    
    let user= await User.findOne({email});
    
    if(user)return res.status(404).json({
        success: false,
        message: "User already Exist",
    })
    const hashedPassword = await bcrypt.hash(password,10)
    user= await User.create({name,email, password: hashedPassword,mobile});
    sendCookie(user,res,"Registered Successfully", 201);
   
};

export const login =async(req,res,next)=>{

    const {email,password} = req.body;
    const user = await User.findOne({email}).select("+password");
    
    if(!user)
    return res.status(404).json({
        success: false,
        message: "Invalid Email id or Password",
    })
    const username= user.name;
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch)
    return res.status(404).json({
        success: false,
        message: "Invalid Email or Password",
    })
    sendCookie(user,res,"Welcome back, "+username,200);

};

export const getmyprofile = async (req,res)=>{
    const { token }=req.cookies;

    if(!token)
    return res.status(404).json({
        success: false,
        message:"Login First",
    });

    const decoded= jwt.verify(token,process.env.JWT_SECRET);
    const user= await User.findById(decoded._id);

    res.status(200).json({
        success:true,
        user,
    })
};

export const logout = async (req,res)=>{
    res
    .status(200)
    .cookie("token","",{
        expires:new Date(Date.now()) ,
        sameSite: process.env.NODE_ENV==="Development" ? "lax" :"none",
        secure: process.env.NODE_ENV==="Development" ? false :true,
    })
    .json({
        success:true,
        message: "You are Logged Out",
    })
};
