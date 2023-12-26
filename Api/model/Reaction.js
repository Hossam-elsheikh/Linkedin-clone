const mongoose = require('mongoose')
const { Schema } = mongoose

const reactionSchema = mongoose.Schema({

    reactedUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reaction:{
        type:String,
        react:['like', 'funny', 'love', 'celebrate', 'insightful', 'support'],
        required: true
    }

})

module.exports = reactionSchema