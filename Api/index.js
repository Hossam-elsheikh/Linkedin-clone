const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('../Api/routes/user')
const postRoutes = require('../Api/routes/post')
const cookieParser = require('cookie-parser')

const port = 4010
app.listen(port, ()=> console.log(`Listening on port ${port}`))

app.use(
    cors({
        origin: '*'
    })
)

//middlewares
app.use(express.json())
app.use(cookieParser())
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
// var link = 'mongodb+srv://essamazoz9:lx0j6WxAIY69DPQP@linkedin.wu0hroe.mongodb.net/?retryWrites=true&w=majority'
var link = 'mongodb://127.0.0.1:27017/linkedinClone'
mongoose
.connect(link)
.then(()=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.log(err);
})