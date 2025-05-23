import express from  "express";
import {connect} from "mongoose";
import { destRouter } from "./router/destination.route.js";
import dotenv from "dotenv"
import { userRoute } from "./router/user.route.js";
import cors from "cors"
dotenv.config();
const mongodb=process.env.mongodb_url
const app= express();
app.use(cors())
app.use(express.json())
app.use("/users",userRoute)
app.use("/destination",destRouter)

app.listen(process.env.PORT,async()=>{
    try{
        await connect(mongodb);
        console.log("database connected")
        console.log("server started at http://localhost:2109");
    }catch(err){
      console.log(err)
    }
    
})