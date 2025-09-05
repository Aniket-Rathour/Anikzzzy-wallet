const express=require("express");
const app=express();
const zod=require("zod")
app.use(express.json());
const router = express.Router();
const {User,Account}= require("../db");

const UserSignupCheck = zod.object({
    userName:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),

})

const UserSigninCheck = zod.object({
    userName:zod.string(),
    password:zod.string(),
})

router.post("/signup",async (req,res,next)=>{
    const body = req.body;

    const success= UserSignupCheck.safeParse(body);
    if(!success){
        res.status(404).json({msg:"wrong input"});
    }

    try{
        const exist = await User.findOne({userName:body.userName});
        if(exist){
            res.status(404).json({msg:"user already exist "})
        }else{
        const newUser= new User(body);
        await newUser.save();
        const newAccount = new Account({
            user:newUser._id
        })
        await newAccount.save();

        res.status(201).json({ msg: "User registered", user: newUser , Account:newAccount});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({msg:"server error while signingup"})
    }
});


router.post("/signin",async (req,res,next)=>{
    const body = req.body;

    const success= UserSigninCheck.safeParse(body);
    if(!success.success){
        return res.status(404).json({msg:"your emailid/password is wrong"});
    }

    try{
        const exist = await User.findOne({userName:body.userName, password:body.password});
        if(exist){
            return res.status(200).json({msg:"sign in succefull", 
                user:{
                    id:exist._id,
                    userName:exist.userName
                }
            })
        }else {
            return res.status(401).json({ msg: "Invalid username or password" });
        }
        
    }catch(err){
        console.error(err);
        return res.status(500).json({msg:"server error while signingin"})
    }
});

router.get("/balance/:userName",async (req,res)=>{
    try{
        const {userName} =req.params;

        const user= await User.findOne({userName:userName});
        if(!user){
            return res.status(404).json({msg:"user not found"});
        }

        const account = await Account.findOne({user:user._id});
        if(!account){
            return res.status(404).json({msg:"accou8nt not found "});

        }

        return res.status(200).json({
            msg:"Balanmce fetched successufilly",
            user:user.userName,
            balance:account.balance
        });
    }catch(err){
        return console.error(err);
    }
})

module.exports=router;