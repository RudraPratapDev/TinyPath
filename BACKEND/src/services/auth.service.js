
import { createUser, findUserByEmail } from "../dao/user.dao.js"
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";


export const registerUser=  async(name,email ,password)=>{
    const user = await findUserByEmail(email);

    if(user)throw new ConflictError("User Already Exists")

    const newUser=await createUser(name,email,password);
    const token= signToken({id:newUser._id});

    return token


}

export const loginUser=async(email,password)=>{
    const user =await findUserByEmail(email);
    if(!user)throw new Error("Invalid credentials");
    if(user.password!==password)throw new Error("Invalid credentials");
    const token=await signToken({id:user._id})
    return token
    
}