const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const Task = require('./models/task');
const mongoose = require('mongoose');
const app = express();

const accessLogStrem = fs.createWriteStream(
    path.join(__dirname,'logs',"access.log"),
    { flags: "a" }
);

app.use(morgan("combined",{stream:accessLogStrem}));

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Controll-Allow-Origin","*");
    res.setHeader("Access-Controll-Allow-Methods","GET,POST,DELETE,OPTIONS");
    res.setHeader("Access-Controll-Allow-Headers","Content-Type");
    next();
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

mongoose.connect(
    'mongodb://172.17.0.2:27017',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err)=>{
        if(err){
            console.log("Failed to connect to mongodb");
        }
        else{
            console.log("connected to mongodb");
            app.listen(port,()=>{
                console.log(`server running on port ${port}`);
            });
        }
    }
)

app.get("/task",async (req,res)=>{
    try{
        const tasks = await tasks.find();
        res.status(200).json({
            tasks:tasks.map((tasks)=>({id:tasks.id, text : tasks.text}))
        })
    }catch(err){
        res.status(500).json({message:"Failed to load"})
    }
});