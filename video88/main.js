const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Hello World2!3')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Feel free to contact me')
})

app.get('/blog/', (req, res) => {
    res.send('This is my blog channel')
})
app.get('/blog/:slug', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`Hello ${req.params.slug} `)
})

// app.get('/blog/intro-to-js',(req,res)=>{
//     res.send("this is js blog")
// })
// app.get('/blog/intro-to-python',(req,res)=>{
//     res.send("this is python blog")
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
