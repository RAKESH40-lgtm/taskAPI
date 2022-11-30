const mongoose=require('mongoose')
const taskAp=new mongoose.Schema({
    id:{
        type:Number
    },
    title:{
        type:String,
        required:true
    },
    is_completed:{
        type:Boolean,
        require:true
    }
})
const taskAPIs=new mongoose.model("tasks",taskAp)
module.exports=taskAPIs