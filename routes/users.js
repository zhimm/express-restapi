const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async(req,res,next) =>{
    const user = await User.find({})
    res.json(user)
})

router.post('/', async(req,res,next) =>{
    const newUser = new User(req.body)
    const user = await newUser.save()
    res.json(user)
})

router.get('/:id', async(req,res,next) =>{
    const {id} = req.params
    const user = await User.findById(id)
    res.json(user)
})

router.put('/:id', async(req,res,next) =>{
    const {id} = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(id, newUser)
    res.json({user: "Updated"})
})


module.exports = router