const mongoose = require('mongoose')
const { Schema } = mongoose
const reactionSchema = require('./Reaction')

const repliesSchema = ({
    replierId: {
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    reply:{
        type:String,
        minLength: 1,
    },
    photo:{
        type:String,
    },
    reactions:[reactionSchema],
    created:{
        type:Date,
        default:Date.now,
    },
})

module.exports = repliesSchema