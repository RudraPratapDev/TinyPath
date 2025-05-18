import urlSchema from "../models/shortUrl.model.schema.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl=async (shortUrlGen,longUrl,userId)=>{
    try{
        const newUrl=new urlSchema({
            full_url:longUrl,
            short_url:shortUrlGen
        })
        if(userId){
            newUrl.user=userId;
        }
        await newUrl.save();
    }catch(err){
        if(err.code==11000){
            throw new ConflictError(err);
        }
        throw new Error(err)
    }
}

export const findUrlFromShortUrl=async (shortUrl)=>{
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}});
}