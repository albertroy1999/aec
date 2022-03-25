
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");

const bcrypt = require("bcrypt")

const app = express();
const path = require('path');
 
app.use(cors());

app.set('viewengine','ejs');

 app.use(bodyParser.urlencoded({ extended: true }));

 app.use(express.static(path.join(__dirname, "./public")));
 
 app.use(express.json());
 
 //app.use('/',require('./api/users/user.router'));

 //routes for pages
 
 app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"public","index.html"));
  
});

 
//  app.post("/login", function(req, res){
    
//   res.sendFile(path.join(__dirname,"public","login.html"));
//   console.log(req.body)

// });

app.use('/',require('./api/users/user.router'));


const { dirname } = require("path");

const port = 3000 || 4000;

app.listen(port, function(){
  console.log("Server started on port."+port);
});
