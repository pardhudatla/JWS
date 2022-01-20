const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

app.post("/",async (req, res)=>{
    try{
    console.log(req.body)
    const token= await jwt.sign(req.body.username,"secretKeyforgeneratingtoken",)
    // jwt.verify(token,"secretKey",(err,user)=>{
    //     if(!err){console.log(user)}else{console.log(err)}
    // })
    res.json({
        status:"success",
        token:token
        
    })
}catch(err){
    res.json({
        status:"failed",
        message:err.message
    })
}
})


app.listen(3000,()=>{
    console.log("Server up and listening ")
})