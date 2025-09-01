const express=require("express");
const router= express.Router();
const {User,Account}=require("../db")

const UserRoute= require("./User")
const TransferRoute=require("./Account")
router.use("/user",UserRoute);
router.use("/transfer",TransferRoute)


router.get("/",async (req,res,next)=>{
    try{
        const users= await User.find({},{userName:1, _id:0});
        res.status(200).json(users);
    }catch(err){
        console.error(err);
        res.status(200).json({msg:"server error while fetching users"})
    }

})

module.exports= router;