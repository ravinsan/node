import express from 'express';
process.loadEnvFile();

console.log("new port - ",process.env.PORT);
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
