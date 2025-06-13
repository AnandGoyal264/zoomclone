import express from "express";
import {createServer} from "node:http";
import mongoose from"mongoose"
import {connectToSocket} from "./src/controllers/socketiocontroller.js"



import {Server} from "socket.io"

import  userroutes from "./src/routes/user_routes.js"
import cors from "cors";


const app=express();
//const port =8080;
const server=createServer(app);
app.set("port",(process.env.PORT||8080));
app.use(express.json());
app.use(cors({
    origin: process.env.Front_end, // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));
app.use("/users", userroutes);
const io=connectToSocket(server);
const start=async ()=>{
    console.log("starting server");
    const connectiondb=await mongoose.connect('mongodb+srv://anandgoyal5656:GFjAJSAyZQQ8CJxr@cluster0.cdcdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("connection established");
    server.listen(app.get("port"),(req,res)=>{
        console.log(`app is listening on the port ,${connectiondb.connection.host}`);
    })
    

}
app.get("/" , (req,res)=>{
    res.send( " jai ho ");
})
start();
