require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('rahulpandey535')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please do not panic</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>yeyyy</h2>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})