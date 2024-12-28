import express from "express";
import path from 'path';
import { fileURLToPath } from "url";

var app = express();
const __filename = fileURLToPath(import.meta.url);//get the resolve path
const __dirname = path.dirname(__filename);

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password:"root",
//     database
// })

app.get('/test',function(req,res){
    res.sendFile(path.join(__dirname,'views/pages','test.html'));
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'views/pages','index.html'));
});

app.listen(8080);
console.log("Server is listening on port 8080");