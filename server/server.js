import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
const app = express();
app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT;
dbConnect();


// Must be at bottom of server.js
app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))