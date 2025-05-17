import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.db.js";
import urlSchema from "./src/models/shortUrl.model.schema.js";
dotenv.config("./.env")




const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.post("/api/create",async (req,res)=>{
    const {url}=req.body;
    const shortUrlGen=nanoid(7);
    const newUrl=new urlSchema({
        full_url:url,
        short_url:shortUrlGen
    })
    await newUrl.save();
    res.send("Saved successfully")
    
    
})

app.get("/:shortUrl",async(req,res)=>{
    const{shortUrl}=req.params;
    const url=await urlSchema.findOne({short_url:shortUrl})
    if(url){
        res.redirect(url.full_url);
    }else{
        res.status(404).send("Not found");
    }
})

app.listen(3000,()=>{
    connectDB();
    console.log("Server running on Port 3000");
})
