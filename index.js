import express from 'express'
import cors from 'cors'
import dotnev from 'dotenv'
import mongoose from 'mongoose';

import { todoRoutes } from './routes/todos.route.js'

dotnev.config();

// const express = require('express');
export const app = express();
 const port = 3000;


app.use(cors())


// Middleware to parse JSON
app.use(express.json());

app.use("/api/todos",todoRoutes)
const connectDB = async() =>{
    try{
        const connected =  await mongoose.connect(process.env.MONGO_URI);
        console.log("MonfoDB connected" + connected.connection.host);

    }catch(error){
        console.error("Erro connection to MongoDB:" +error.message);
        process.exit(1);
    }
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
  connectDB();
});