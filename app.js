const express = require("express")
const app = express();
const path =  require("path");
const dotenv = require('dotenv').config();

app.use(express.static("public"));

/* app.listen(3000, () => 
    console.log("Servidor corriendo")
); */

app.listen(process.env.PORT, () => { 
    console.log("Servidor escuchando en Puerto" + process.env.PORT);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))    
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))    
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))    
});

