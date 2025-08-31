const express= require("express")
const zod= require("zod")
const router= express.Router();
const {User,Account} = require("../db");

const transfer= new ZodAny.object({

})

router.post("/transfer",(req,res,next)=>{
    const body = req.body;
})

