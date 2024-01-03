const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = mongoose.Schema.Types
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle:{
        type: String
    },
    password: {
        type: String,
        required: true,
        // select: false
    },
    phoneNumber: {
        type: Number,
    
        // unique: true,
    },
    location: {
        type: String,
    },
    profilePicture: {
        type: String,
        default: 'https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg'
    },
    profileCover: {
        type: String,
        default: 'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg'
    },
    followers: [{
        type: ObjectId,
        ref: "User"
    }],
    following: [{
        type: ObjectId,
        ref: "User"
    }],
    connections:[{
        type:ObjectId,
        ref:"User"
    }]

}, { timeStamps: true })

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    if (!this.profilePicture) {
        this.profilePicture = 'https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg'
    }
    if (!this.profileCover) {
        this.profileCover = 'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg'
    }
    next()
})


const userModel = mongoose.model('User', userSchema)
module.exports = userModel