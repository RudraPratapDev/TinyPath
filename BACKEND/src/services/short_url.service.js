import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shortUrl.model.schema.js"
import { saveShortUrl } from "../dao/short_url.js";

export const createShortUrlServiceWithoutUser =async (url)=>{

    const shortUrlGen=generateNanoId(7);


        await saveShortUrl(shortUrlGen,url)
        return shortUrlGen;
}
export const createShortUrlServiceWithUser =async (url,userId)=>{

    const shortUrlGen=generateNanoId(7);


        await saveShortUrl(shortUrlGen,url,userId)
        return shortUrlGen;
}