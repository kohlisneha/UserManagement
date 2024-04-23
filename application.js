const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/user_management_db')
.then(()=>console.log("Connecting to mongo db"))
.catch(()=>console.log("Error in connecting",err));
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
app.get('/users',(req,res)=>{
    User.find({}).then(users=>res.json(users)).catch(err=>res.status(500).json({message:err.message}))
})
app.post('/users',(req,res)=>{
    const users=new users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    
})

app.delete('/user:/id',(req,res)=>{
    const userId=req.params.id;
    User.findByIdAndDelete(userId).then(deleteUser=>{
        if(!deletedUser){
            res.status(400).json({message:'user not found'});
        }
        res.json({message:'user deleted successfully'})
    })
    .catch(err=>res.status(400).json({message:err.message}))
});app.listen(3000);