const User=require('../models/User');
const bcrypt = require('bcryptjs');

const getAllUsers=async(req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }catch{
        console.log(error)
    }
    if(!users){
        return res.status(404).json({message:"no users found"})
    }
    return res.status(200).json({users})
}

const signup=async(req,res,next)=>{
    const {name,email,password}=req.body;

    let existingUser;
    try{
        existingUser=await User.findOne({email});
    }catch(error){
        console.log(error)
    }
    if(existingUser){
        res.status(400).json({message:"user with this credentials already exsists"})
    }



    const user=new User({
        name,
        email,
        password
    });
    
    try{
        await user.save()
    }catch(e){
        console.log(e)
    }
    return res.status(201).json({user})

}

const login=async(req,res)=>{
    const {email,password}=req.body
    let existingUser;
    try{
        existingUser=await User.findOne({email});
    }catch(error){
        console.log(error)
    }
    if(!existingUser){
        res.status(404).json({message:"not authorized"})
    }

    return res.status(200).json({message:"login successfull"})


}

module.exports={getAllUsers,signup,login}