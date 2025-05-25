import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware=async(req,res,next)=>{
    const token=req.cookies.accessToken
    if(!token)return res.status(401).json({message:"Unauthorized1"});

    try{
        const decoded=verifyToken(token)
        const user=await findUserById(decoded)
        if(!user) return res.status(401).json({message:"Unauthorized2"});
        req.user=user;
        next();
    }catch(error){
        return res.status(401).json({message:"Unauthorized3"});
    }
}