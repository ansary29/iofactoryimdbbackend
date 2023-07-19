const moviemodel=require('../Models/Moviemodel')

module.exports.create=async(req,res)=>{
    try {
        const resp=await moviemodel.create(req.body)
        res.send(resp._id)
    } catch (error) {
        console.log(error)
    }
}

module.exports.get=async(req,res)=>{
    try {
        const resp=await moviemodel.find({_id:req.params.movieid})
        .populate("actors")
        .populate("producer")
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}
module.exports.getallmovies=async(req,res)=>{
    try {
        const resp=await moviemodel.find({})
        .populate("actors")
        .populate("producer")
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}

module.exports.delete=async(req,res)=>{
    try {
        const resp=await moviemodel.deleteOne({_id:req.body.movieid})
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}

module.exports.update=async(req,res)=>{
    try {
        const resp=await moviemodel.findOneAndUpdate({_id:req.body.movieid},{$set:{
            name:req.body.name,
            yearofrelease:req.body.yearofrelease,
            plot:req.body.plot,
            poster:req.body.poster,
            actors:[...req.body.actors],
            producer:req.body.producer
        }},{new:true})
        console.log(resp)
        res.send(resp._id)
    } catch (error) {
        console.log(error)
    }
}