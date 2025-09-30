import mongoose from 'mongoose'
import express from 'express'
import Todo from './models/Todo.js'

let conn=await mongoose.connect("mongodb://localhost:27017/")
const app=express()
const port=3000

app.get('/',(req,res)=>{
    const todo=new Todo({
        title:"Exercise",
        author:"me",
        desc:"Morning exercise scheduled at 6:00 A.m",
        isDone:true 
    });
    todo.save();
    res.send('Hello World,todo saved')
})

app.get('/todo',async (req,res)=>{
    let todo=await Todo.findOne({});
    console.log(todo)
    res.json({title:todo.title,desc:todo.desc,author:todo.author})
})
app.post('/',(req,res)=>{
    res.send('This is a post request')
})

app.listen(port,()=>{
    console.log(`port listening on port ${port}`)
})
