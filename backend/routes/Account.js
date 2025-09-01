const express= require("express")
const zod= require("zod")
const router= express.Router();
const mongoose = require("mongoose"); 
const {User,Account} = require("../db");

const transfer= new zod.object({
    senderUserName:zod.string(),
    receiverUserName:zod.string(),
    amount:zod.number()
})

router.post("/send",async (req,res,next)=>{
    const body = req.body;
    const success= transfer.safeParse(body)

    if(!success.success){
        res.status(404).json({
            msg:"transer structure is wrong"
        })
    }
    

    try{


        const sender= await User.findOne({userName:body.senderUserName});
        const receiver= await User.findOne({userName:body.receiverUserName});

        if(!sender || !receiver){
            res.status(404).json({
                msg:"the sender dosent exist"
            })
        }

        const senderAccount = await Account.findOne({user:sender._id})
        const receiverAccount= await Account.findOne({user:receiver._id})
        if(!senderAccount || !receiverAccount){
            res.status(404).json({
                msg:"sender/resever account not found"
            })
        }

        const session = await mongoose.startSession();
        session.startTransaction();

        if(senderAccount.balance < body.amount){
            throw new Error("Insufficent ballane");
        }

        senderAccount.balance = senderAccount.balance- body.amount;
        receiverAccount.balance = receiverAccount.balance + body.amount;

        await senderAccount.save({session});
        await receiverAccount.save({session});

        await session.commitTransaction();
        session.endSession();

        return res.json({
            success:true, msg:"Transfered completeled successfully "
        })

    }catch(err){
        await session.abortTransaction();
        session.endSession();
        return{success:false, msg:err.message}


    }
})

module.exports=router;

