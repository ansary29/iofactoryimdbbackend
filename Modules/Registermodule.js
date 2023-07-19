const usermodel=require('../Models/Usermodel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

module.exports.signup=async(req,res)=>{
    //checking if user already exists
    const userexist=await usermodel.findOne({email:req.body.email})
    if(userexist)return res.status(400).send("User already exist!")

    //password hashing
    const randomstring=await bcrypt.genSalt(10)
    req.body.password=await bcrypt.hash(req.body.password,randomstring)

    //creating new user collection
    const data=new usermodel(req.body)
    const user=await data.save()
    console.log(user)

    return res.status(200).send('Registered successfully!')
}

module.exports.signin=async(req,res)=>{
    let userexist=await usermodel.findOne({email:req.body.email})

    //Password verification
    if(userexist){
        const issamepass=await bcrypt.compare(req.body.password,userexist.password)
        if(!issamepass)return res.status(400).send("Invalid email or password!")

        //generating token
        const id=userexist._id
        const token =jwt.sign({id},process.env.Private_key,{expiresIn:'30d'})

        return res.status(200).send({_id:userexist._id,name:userexist.name,email:userexist.email,token})
    }
    else{
        return res.status(400).send("Invalid email or password!")
    }
}