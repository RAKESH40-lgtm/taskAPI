const express=require('express')
const taskAPIs=require('../schema/taskAPI')
const router=express.Router()

router.post('/v1/tasks',(req,res)=>{
    taskAPIs.create({
        id:Math.floor(Math.random()*10),
        title:req.body.title,
        is_completed:req.body.is_completed
    }).then((data)=>{
        res.status(201).json(data.id)
    }).catch((err)=>{
        res.send(err)
    })
})

router.get('/v1/tasks',(req,res)=>{
    taskAPIs.find().then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/v1/tasks/:id',(req,res)=>{
    
    taskAPIs.findOne({id:req.params.id}).then((data)=>{
        if(!data){
            res.status(404).json({error:"There is no task at that id"})
        }else{
            res.status(200).json(data)
        }
    }).catch((err)=>{
        res.send(err)
    })
})
router.delete('/v1/tasks/:id',(req,res)=>{
    
    taskAPIs.findOne({id:req.params.id}).then((data)=>{
        if(!data){
            res.status(204).json({message:"none"})
        }else{
            taskAPIs.deletebyId({id:req.params.id}).then((data)=>{
                res.status(200).json(data)
            })
        }
    }).catch((err)=>{
        res.send(err)
    })
})
router.put('/v1/tasks/:id',(req,res)=>{
    
    taskAPIs.findOne({id:req.params.id}).then((data)=>{
        if(!data){
            res.status(404).json({message:"none"})
        }else{
            taskAPIs.updatebyId({title:req.body.title,is_completed:req.body.is_completed}).then((data)=>{
                res.status(200).json(data)
            })
        }
    }).catch((err)=>{
        res.send(err)
    })
})
router.post('/v1/task',(req,res)=>{
    taskAPIs.create({
        id:Math.floor(Math.random()*10),
        title:req.body.title,
        is_completed:req.body.is_completed
    }).then((data)=>{
        res.status(201).json(data.id)
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports=router