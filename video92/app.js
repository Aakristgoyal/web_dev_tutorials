const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.get('/', (req, res) => {
  let siteName="Adidas"
  let searchText="Search now"
  let arr=["Aakrist",54,65]
  res.render("index",{ siteName:siteName,searchText:searchText,arr})
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle="Adidas why should i prefer it?"
  let blogContent="Adidas and its features.."
  res.render("blogpost",{ blogTitle:blogTitle,blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
