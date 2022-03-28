const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");       //for maintaining logs
const bodyParser = require("body-parser");
const Task = require('./models/Task');
const mongoose = require("mongoose");

const app = express();

//created a write stream for logs
const accessLogStream = fs.createWriteStream(
    path.join(__dirname,'logs','access.log'),
    {flags: "a"}
);

//using morgan to maintain logs
app.use(morgan("combined",{stream:accessLogStream}));

//bodyparser for getting json data
app.use(bodyParser.json());

//for cross origin, accept the request from any where
app.use((req,res,next)=>{       
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    next();
});

//routes
app.get("/tasks",async(req,res)=>{
    try{
        const tasks = await Task.find();
        res.status(200).json({tasks:tasks});
    }
    catch{
        console.log("Error at /tasks route");
        res.status(500).json({message:"Failed to load tasks"});
    }
});

app.post("/addtasks",async(req,res)=>{
    try{
        const text = req.body.task;
        const task = {
            text:text
        };
        const promise = Task.create(task);
        promise.then((doc)=>{
            res.status(200).json({message:task})
        }).catch((err)=>{
            res.status(404).json({message:"Failed to add task"})
        });
    }
    catch{
        console.log("Error at /tasks route");
        res.status(500).json({message:"Failed to load tasks"});
    }
});


//listens at this port
const port = process.env.PORT || 8000;

//connecting mongodb & app start
mongoose.connect(
    //`mongodb://mongodb0.example.com:27017`    - basic example by mongodb
    //`mongodb://localhost:27017`               - not working because containers are isloted can't access localhost like this
    //`mongodb://172.17.0.2:27017`,       //- working, iit is IPaddress of that database container
    //`mongodb://host.docker.internal:27017`,
    `mongodb://admin:password@mongodb:27017`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,

    },(err)=>{
        if(err){
            console.log("Failed to connect to mongodb ERROR : ",err);
        }
        else{
            console.log("connected to mongodb");
            app.listen(port,()=>{
                console.log(`server running on port ${port}`);
            });
        }
    }
);



