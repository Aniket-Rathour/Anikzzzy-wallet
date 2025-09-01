const express= require("express")
const zod= require("zod")
const router= express.Router();
const {User,Account} = require("../db");


const transfer= new zod.object({
    senderUserName:zod.String(),
    reseverUserName:zod.String(),
    amount:zod.String()
})

router.post("/transfer",async (req,res,next)=>{
    const body = req.body;
    const success= transfer.safeParse(body)

    if(!success.success){
        res.status(404).json({
            msg:"transer structure is wrong"
        })
    }
    const senderExist= await User.findOne({username:body.senderUsername});
    const reseverExist= await User.findOne({username:body.reseverUsername});

    if(!senderExist && !reseverExist){
        res.status(404).json({
            msg:"the sender dosent exist"
        })
    }
    const senderAccount = await Account.findOne({user:senderExist._id})
    if(!senderAccount){
        res.status(404).json({
            msg:"sender account not found"
        })
    }

    const userAccount= await Account.findOne({user:reseverExist._id})
    if(!senderAccount){
        res.status(404).json({
            msg:"resever account not found "
        })
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        

    }catch{

    }finally{

    }

})

