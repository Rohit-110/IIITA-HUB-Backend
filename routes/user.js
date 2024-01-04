import express from "express";
import{ login,register,getmyprofile, logout} from "../controller/user.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router= express.Router();

router.post('/new',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',getmyprofile);
router.get('/hello',(req,res)=>{
    res.send("Hello World");
})
export default router;


