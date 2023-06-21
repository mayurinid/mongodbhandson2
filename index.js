const express=require("express")
const dotenv=require("dotenv").config()
const route=require("./routes/route")
const app=express()
app.use(express.json())
app.use(route)
// const MongoDb=require("mongodb")
app.get("/",(req,res)=>{
    res.send("API Sucessfully running")
})
const port=process.env.PORT 
app.listen(port,()=>{
    console.log("Server is running on 9000 port");
})