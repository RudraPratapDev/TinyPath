import urlSchema from "../models/shortUrl.model.schema.js";

export const saveShortUrl=async (shortUrlGen,longUrl,userId)=>{
    const newUrl=new urlSchema({
            full_url:longUrl,
            short_url:shortUrlGen
        })
        if(userId){
            newUrl.user=userId;
        }
        await newUrl.save();
}

export const findUrlFromShortUrl=async (shortUrl)=>{
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}});
}