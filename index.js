const express=require('express');
const googleTranslitrate=require('google-transliterate');
var bodyParser = require('body-parser');
const app=express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/transl',(req,res)=>{
    googleTranslitrate.transliterate(req.body.message,'hi','en',(err,data)=>{
        console.log(data);
        (err)?res.json(err):res.json(data[0].hws);
    });
})
app.listen(port,()=>{
    console.log("I am Listing on "+port);
})