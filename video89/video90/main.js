const express = require('express')
const app = express()
const port = 3000
const fs=require('fs')
const blog = require('./routes/blog')

// ...

app.use('/blog', blog)

app.use(express.static('public'))

// middleware1
app.use((req,res,next)=>{
    console.log(req.headers)
    req.aak="I am Aakrist";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

// middleware2
app.use((req,res,next)=>{
    console.log("middleware2 created")
    req.aak="I am not aakrist"
    next()
})

app.get('/', (req, res) => {
    res.send('This is a get request..')
})

app.get('/about', (req, res) => {
    res.send('This is a about page..'+req.aak)
})

app.get('/contact', (req, res) => {
    res.send('This is a contact page')
})

app.listen(port, () => {
    console.log(`app listening on ${port}`)
})
