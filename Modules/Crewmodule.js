const crewmodel=require('../Models/Crewmodel')

module.exports.createactor=async(req,res)=>{
   try {
    const resp=await crewmodel.create({...req.body,profession:'actor'})
    res.send(resp)
   } catch (error) {
    console.log(error)
   }
}
module.exports.createproducer=async(req,res)=>{
    try {
     const resp=await crewmodel.create({...req.body,profession:'producer'})
     res.send(resp)
    } catch (error) {
     console.log(error)
    }
 }

module.exports.getactors=async(req,res)=>{
    try {
        const resp=await crewmodel.find({profession:'actor'})
        .find({name:{'$regex':req.query.search,'$options':"i"}})
        .populate("movies")
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}

module.exports.getproducers=async(req,res)=>{
    try {
        const resp=await crewmodel.find({profession:'producer'})
        .find({name:{'$regex':req.query.search,'$options':"i"}})
        .populate("movies")
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}

module.exports.updatecrew=async(req,res)=>{
    let movieId=req.body.movieId
    try {
        const resp=await crewmodel.findOne({_id:req.body.crewId})
        let movies=resp.movies
        if(movies.includes(movieId)) return
        movies.push(movieId)
        const updatedresp=await crewmodel.findOneAndUpdate({_id:req.body.crewId},{$set:{movies:movies}},{new:true})
        res.send(updatedresp)
    } catch (error) {
        console.log(error)
    }
}