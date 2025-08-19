import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path:"./env"})
connectDB( )
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`app running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{console.log('Mongodb Connection err!!',err)})



















// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import express from 'express'
// import {DB_NAME} from './constants.js'

// const app=express()
// // IIFE
// ;(async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//        app.on("Error",(error)=>{
//         console.log("Error",error)
//         throw err
//        })

//        app.listen(process.env.PORT || 4000,()=>{
//         console.log(`app listen on port ${process.env.PORT}`)
//        })
       
//     } catch (error) {
//         console.log("ERROR",error)
//         throw err   
//     }
// })()

