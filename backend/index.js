import express from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";
import { Album } from "./models/albumModel.js";
import albumsRoute from './routes/albumsRoute.js';
import cors from 'cors';


const app = express();

//middleware for parsing request body sent as post
app.use(express.json());

//middleware for handling CORS Policy 

app.use(cors());


app.get('/', (req, res) => {
    console.log(req) //log the request
    //HTTP status code 
    return res.status(234).send(`welcome to MERN Wormhole`)
}); 

app.use('/albums', albumsRoute);


mongoose //use mongoDB through JavaScript
    .connect(mongoDBurl)
    .then(() => {
        console.log('App connected to mongoDB');
        app.listen(PORT, () => {
            console.log(`App listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });


//mongodb+srv://jayzenith248:PKY1JfpLDSB5klZN@mern-cluster.d4a3fdx.mongodb.net/?retryWrites=true&w=majority