const express = require('express')
const mongoose= require('mongoose')

//init app
const app = express()


//middleware
app.use(express.json())

app.get('/', async(req,res,next) =>{
    res.json({message:'testing'})
})


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Serving on port ${PORT}`))
