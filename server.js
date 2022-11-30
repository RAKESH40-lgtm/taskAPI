const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const router=require('./routes/routes')
const app=express()

app.use(cors())


mongoose.connect("mongodb://localhost:27017/taskAPI").then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)


app.listen(8080,(err)=>{
    if(!err){
        console.log("server starts at 8080")
    }else{
        console.log(err)
    }
})