//https://www.digitalocean.com/community/tutorials/how-to-create-an-http-client-with-core-http-in-node-js#step-3-making-a-post-request
const express = require('express');
const https = require('https');
const app = express();

app.get("/",(req, res)=>{
    res.send("<h1>Welcome2 to Docker <br> <i>India</i> </h1>");
});

var options = {
    host:"https://electronics-mart-api.herokuapp.com",
    path:"/view_by_categories",
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  };

  var data = {
    "category":["Phone","Cover","AC","headphone"]
}
  
const request = https.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).end();
request.write(JSON.stringify(data));

request.end();

request.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server runing on port ${port}`);
});