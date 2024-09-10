import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/productRoute.js";
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);


app.get('/', (req,res)=>{
    res.send("Hello from the other sideeeeeee");
});


mongoose.connect(process.env.URI)
.then(() =>{
    console.log("Connected to the database");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(()=>{
    console.log("Connection to the database failed");
});

