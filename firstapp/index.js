const express = require('express');
const app = express();

app.get("/",(req, res)=>{
    res.send("<h1>Welcome2 to Docker <br> <i>India</i> </h1>");
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server runing on port ${port}`);
});