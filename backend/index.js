import express, { request, response } from "express";
import { PORT, MongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

//Middleware for handling cors policy
app.use(cors());

app.get("/", (request, response)=>{
    console.log(request);
    return response.send("Welcome to my Book Store");
})

app.use('/books', bookRoute);



mongoose.connect(MongodbURL)
.then( ()=> {
   console.log("App connected to datbase");
   app.listen(PORT, ()=>{
   console.log(`App is listening to port:${PORT}`);
   })
})
.catch((error)=>{
   console.log(error);
});