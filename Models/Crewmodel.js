const mongoose=require('mongoose')

const crewmodel=mongoose.Schema({
    name:{
        type:String,
        trim:true,required:true
    },
    gender:{
        type:String,required:true
    },
    dob:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    movies:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Movie'
        }
    ],
    profession:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Crew=mongoose.model('Crew',crewmodel)

module.exports=Crew