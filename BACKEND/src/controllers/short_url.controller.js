import { findUrlFromShortUrl } from "../dao/short_url.js";
import {  createShortUrlServiceWithoutUser } from "../services/short_url.service.js";
import { generateNanoId } from "../utils/helper.js";


export const createShortUrl=async(req,res)=>{
    
    const {url}=req.body;
    const shortUrl= await createShortUrlServiceWithoutUser(url);
    res.send(process.env.APP_URL+shortUrl);
    
    
}

export const redirectFromShortUrl =async (req,res)=>{
    const{shortUrl}=req.params;
    const url=await findUrlFromShortUrl(shortUrl);
    res.redirect(url.full_url);
    
}
