const mongoose = require('mongoose')

const upload = mongoose.Schema({
    text:{
        type:String
    }
})

module.exports = mongoose.model('Upload',upload)