const express = require('express')
const blog=require('./routes/blog')
const shop=require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)

app.get('/', (req, res) => {
    console.log("its a get request...")
  res.send('Hello World get')
}).put('/',(req,res)=>{
    console.log("This is a put request")
    res.send("Hello world put")
}).post('/',(req,res)=>{
    console.log("Testing my first post request....")
    res.send("Hello world post")
}).delete('/',(req,res)=>{
    console.log("This is a delete request")
    res.send("Hello World delete")
})

app.get('/index',(req,res)=>{
    console.log("this is index page")
    res.sendFile('templates/index.html',{root:__dirname})
})

app.get('/api',(req,res)=>{
    console.log("this is api check")
    res.json({a:1,b:2,c:5,name:["Aakrist","Deepak","Raghav","Rohit"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
