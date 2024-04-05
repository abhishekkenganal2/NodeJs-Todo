const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

const PORT = 8000;

//init app
const app = express();

const connectURL = "mongodb://localost:27017/todoDb";

mongoose
  .connect(connectURL)
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error.message));

//view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public"))   )

//get route
app.get("/",(req,res,next)=> {
    try{
        res.render("index",{title: "List todo"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
})

app.get("/add-todo",(req,res,next)=> {
    try{
        res.render("newTodo")
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.get("/update-todo",(req,res,next)=> {
    try{
        res.render("updateTodo")
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.get("/delete-todo",(req,res,next)=> {
    try{
        res.render("delete")
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});
