const express=require("express")
const router=express.Router()

const Moviemodule=require('../Modules/Moviemodule')

router.post('/create',Moviemodule.create)
router.put('/update',Moviemodule.update)
router.delete('/delete',Moviemodule.delete)
router.get('/get/:movieid',Moviemodule.get)
router.get('/getallmovies',Moviemodule.getallmovies)

module.exports=router