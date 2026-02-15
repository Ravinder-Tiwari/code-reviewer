const express = require('express')
const aiRoutes = require("./routes/ai.routes")
const app = express()
const path = require("path")
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.static("./public"))
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/ai",aiRoutes)

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})
module.exports = app;