const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('../Api/routes/user')
const postRoutes = require('../Api/routes/post')

const port = 4010
app.listen(port, ()=> console.log(`Listening on port ${port}`))

app.use(
    cors({
        origin: '*'
    })
)

//middlewares
app.use(express.json())
app.use('/user', userRoutes)
app.use('/post', postRoutes)

//not found middleware
app.use('*', (req, res, next)=> {
    res.status(404).json({message: 'API not found'})
})

//error handling middleware
app.use((err, req, res, next)=>{
    res.status(500).json({message: 'there is something went wrong with your API'})
    next(err)
})

mongoose
.connect('mongodb://127.0.0.1:27017/linkedinClone')
.then(()=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.log(err);
})