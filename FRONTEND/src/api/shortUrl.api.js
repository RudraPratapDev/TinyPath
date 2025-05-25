import { axiosInstance } from "../utils/axiosInstance";

export const createShortUrl=async(url)=>{
    const temp=await axiosInstance.post('/api/create',{url})
    return temp.data.shortUrl
}