const mongoose=require('mongoose')

module.exports={
     connectMongoose(){
        try {
            mongoose.connect(process.env.MONGO_URL)
            console.log('MongoDb connected')
        } catch (error) {
            console.log(error)
        }
     }
}