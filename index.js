const express = require("express")

const PORT = 8000

//init app
const app = express();

//view engine
app.set("view engine","ejs");

app.listen(PORT,()=>{
    console.log(`server run at ${PORT}`)
})