const mongoose =require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("conected mongoose")
}).catch(err=>{
    console.log("mongodb error ", err)
})

const UserSchema= new mongoose.Schema({
    userName:String,
    password:String,
    firstName:String,
    lastName:String
})
const AccountSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    balance:{
        type:Number,
        default: Math.floor(1+ Math.random()*10000)
    },
})

const User = mongoose.model("User", UserSchema);
const Account = mongoose.model("account", AccountSchema);

module.exports =  {User,Account};



