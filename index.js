const express = require("express")
const mongoose = require("mongoose")
const PORT = 8000

//init app
const app = express();

const connectURL =  "mongodb://localost:27017/todoDb"

//view engine
app.set("view engine","ejs");

app.listen(PORT,()=>{
    console.log(`server run at ${PORT}`)
})


