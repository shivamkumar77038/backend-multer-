const express = require('express');
const bodyParser = require('body-parser')
const path = require("path");
const multer  = require('multer')
const app = express();
const upload = require("./middleware/multer.middleware");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,"public")));
app.set('view engine',"ejs");


app.get("/",(req,res)=>{
    
    res.render("index");
})
app.post("/upload",upload.single("file"),(req,res)=>{
    console.log(req.file);
    res.redirect('/');
})



app.listen(3000);