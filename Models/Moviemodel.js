const mongoose=require('mongoose')

const moviemodel=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    yearofrelease:{
        type:Number,
        required:true
    },
    plot:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        default:'https://media.comicbook.com/files/img/default-movie.png'
    },
    actors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Crew'
        }
    ],
    producer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Crew'
    }
},{
    timestamps:true
})

const Movie=mongoose.model('Movie',moviemodel)

module.exports=Movie