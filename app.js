const express = require('express')
const mongoose= require('mongoose')
const userRoutes = require('./routes/users')
//add local storage db , will host later
mongoose.connect('mongodb://localhost/express-rest', {useNewUrlParser:true})
mongoose.set('useFindAndModify', false);

//init app
const app = express()


//middleware
app.use(express.json())
app.use('/users', userRoutes)


//routes
app.get('/', async(req,res,next) =>{
    res.json({message:'testing'})
})


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Serving on port ${PORT}`))
