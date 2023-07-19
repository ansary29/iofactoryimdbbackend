const mongoose=require('./connect')
const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')

dotenv.config()
const app=express()

mongoose.connectMongoose()
app.use(express.json())
app.use(cors())

const Userrouter=require('./Router/Userrouter')
const Crewrouter=require('./Router/Crewrouter')
const Movierouter=require('./Router/Movierouter')
app.use('/users',Userrouter)

const Authmodule=require('./Modules/Authmodule')
app.use('/',Authmodule.authenticate)

app.use('/crew',Crewrouter)    
app.use('/movie',Movierouter)

app.listen(process.env.PORT,()=>{
    console.log('server started')
})