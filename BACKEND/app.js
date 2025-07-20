import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.db.js";
import urlSchema from "./src/models/shortUrl.model.schema.js";
import short_url from "./src/routes/short_url.route.js";
import auth_routes from "./src/routes/auth.route.js"
import user_route from "./src/routes/user.route.js"
import { redirectFromShortUrl } from "./src/controllers/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { attachUser } from "./src/utils/attachUser.js";
dotenv.config("./.env")




const app=express();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))



app.use(attachUser)
app.use("/api/auth",auth_routes)
app.use("/api/create",short_url)
app.use("/api/user",user_route)

app.use("/:shortUrl",redirectFromShortUrl)

app.use(errorHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on Port ${PORT}`);
})
