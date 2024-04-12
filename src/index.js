import express from 'express';
import connectDB from './db/db_connection.js';
import { PORT } from './utils/env.js';

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World");
})

const startServer = async () =>{
    try{
        await connectDB();
        await app.listen(PORT || 3000, ()=>{
            console.log(`Server is running on port ${PORT}`);
        });

    }
    catch(err){
        console.log(err);
    }
}

startServer();
// app.listen(process.env.PORT || 3000, ()=>{
//     console.log(`Server is running on port ${process.env.PORT}`);
// })
