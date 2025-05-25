import { axiosInstance } from "../utils/axiosInstance";

export const createShortUrl=async(url,slug)=>{
    const temp=await axiosInstance.post('/api/create',{url,slug})
    return temp.data.shortUrl
}