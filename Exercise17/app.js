const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port=3000;
const card=require('./models/schema');
mongoose.connect('mongodb://host:27017/cardsDB');
app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/cards',(req,res)=>{
    
})
app.get('port',(req,res)=>{
    res.send(`Server is running on port ${port}`);
})