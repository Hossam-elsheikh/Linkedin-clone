const mongoose = require('mongoose')
const {Schema} = mongoose
const {ObjectId} = mongoose.Schema.Types

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        unique:true,
    },
    phoneNumber:{
        type: String,
        required: true,
        unique:true,
    },
    location:{
        type: String,
    },
    
},{timeStamps: true})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel