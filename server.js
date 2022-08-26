const express=require('express')
const app=express()
const axios=require('axios')
const cors=require('cors')
const mongoose=require('mongoose')
const sportsModel=require('./mongoose')
const url='mongodb+srv://sreekanth:nbKIIEbOJANNWtad@cluster0.vok4hmz.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection

db.on("error",console.error.bind(console,"connection error"))

db.once('open',function(){
    console.log('Successfully connected to MongoDB')
})

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get('/data',async (req,res)=>{
  let data=await axios.get('http://206.189.150.166:7000/match-list?token=sreesdfsfsfsdfsdlkjhgrfwq3339897=')
  let values=JSON.stringify(data.data)
  console.log(values)
  res.json(values)
  
})

app.listen(5000,()=>{
    console.log('server is running on port:5000')
})