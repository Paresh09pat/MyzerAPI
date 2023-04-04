
const mongoose =require("mongoose")

const textSchema= new mongoose.Schema({
    title:String,
    description:String,
    content:String,
    author:String,
    date:{
        type:Date,   
    }

})

// create collection 

const textModel = new mongoose.model ('htmlstrings',textSchema)

module.exports =textModel