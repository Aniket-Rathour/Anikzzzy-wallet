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
    

    try{


        const sender= await User.findOne({username:body.senderUsername});
        const resever= await User.findOne({username:body.reseverUsername});

        if(!sender && !resever){
            res.status(404).json({
                msg:"the sender dosent exist"
            })
        }

        const senderAccount = await Account.findOne({user:sender._id})
        const reseverAccount= await Account.findOne({user:resever._id})
        if(!senderAccount || !reseverAccount){
            res.status(404).json({
                msg:"sender/resever account not found"
            })
        }

        const session = await mongoose.startSession();
        session.startTransaction();
        if(senderAccount.amount < body.amount){
            throw new Error("Insufficent ballane");
        }

        senderAccount.balance = senderAccount.balance- body.amount;
        reseverAccount.balance = reseverAccount.balance- body.amount;

        await senderAccount.save({session});
        await reseverAccount.save({session});

        await session.commitTransation();
        session.endSession();
        return{
            success:true, msg:"Transfered completeled successfully "
        }

    }catch(err){
        await session.abortTransation();
        session.endSession();
        return{success:false, msg:err.massage}


    }
})

