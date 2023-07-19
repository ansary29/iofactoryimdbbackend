const express=require('express')
const router=express.Router()

const Crewmodule=require('../Modules/Crewmodule')
router.post('/createactor',Crewmodule.createactor)
router.post('/createproducer',Crewmodule.createproducer)
router.get('/getactors',Crewmodule.getactors)
router.get('/getproducers',Crewmodule.getproducers)
router.put('/updatecrew',Crewmodule.updatecrew)

module.exports=router