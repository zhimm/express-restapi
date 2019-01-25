const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async(req,res,next) =>{
    const user = await User.find({})
    res.json(user)
})

module.exports = router