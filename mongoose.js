const mongoose=require('mongoose')
const MongoClient=mongoose.MongoClient

const sportsSchema=new mongoose.Schema({
    eventname:{type:String,required:true},
    eventId:{type:Number,required:true},
    marketId:{type:Number,required:true}
})

const sportsModel=mongoose.model('sports',sportsSchema)
 module.exports=sportsModel
