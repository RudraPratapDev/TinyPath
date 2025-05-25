import shortUrl from "../models/shortUrl.model.schema.js";
import User from "../models/user.model.js"



export const findUserByEmail=async(email)=>{
    return await User.findOne({email});
}
export const findUserByEmailAndPassword=async(email)=>{
    return await User.findOne({email}).select("+password");
}


export const findUserById=async(id)=>{
    const user =await User.findOne({_id: id});
    return user
}

export const createUser=async(name,email,password)=>{

    const newUser=new User({name,email,password});
    await newUser.save();
    return newUser;
}



export const getAllUserUrlsDao = async (id) => {
    return await shortUrl.find({user:id})
}

