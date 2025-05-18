import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.db.js";
import urlSchema from "./src/models/shortUrl.model.schema.js";
import short_url from "./src/routes/short_url.route.js";
import { redirectFromShortUrl } from "./src/controllers/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
dotenv.config("./.env")




const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())




app.use("/api/create",short_url)

app.use("/:shortUrl",redirectFromShortUrl)

app.use(errorHandler)

app.listen(3000,()=>{
    connectDB();
    console.log("Server running on Port 3000");
})
