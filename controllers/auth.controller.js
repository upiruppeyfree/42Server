const UserModel = require("../models/User");

const registerUser=async(req,res)=>{
    const {mobile,password,confirmPassword}=req.body
    if(!mobile ||  !password || !confirmPassword){
      return res.status(400).send({message:"Please Fill Your Mobile Number "})   
    }

    if(password!=confirmPassword){
        return res.status(400).send({message:"Password Is Not Same "})
    }

    const isExistUser = await UserModel.findOne({ mobile });
    if (isExistUser) {
        return res.status(400).send({ message: "Mobile Number already exists. Please Login." });
    }

    try {
        await UserModel.create({mobile,password,confirmPassword})
        res.status(201).send({message:"Account Create Successfully"})
    }
    catch(error){
        console.log(error)
    }
}

const loginUser=async(req,res)=>{
    const {mobile,password}=req.body
    if(!mobile || !password){
        return res.status(400).send({message:"Please Fill Your Mobile Number "})
    }
    try {
        const user = await UserModel.findOne({ mobile });
        if (!user) {
            return res.status(400).send({ message: "Invalid Mobile Number or Password" });
        }
        if (user.password !== password) {
            return res.status(400).send({ message: "Invalid Mobile Number or Password" });
        }
        res.status(200).send({message:"Login Successfully"})
    }
    catch(error){
        console.log(error)
    }

}

module.exports={registerUser,loginUser}