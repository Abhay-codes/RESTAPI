const express = require("express");
const users=require("./MOCK_DATA.json");
console.log(users);
const app=express();
const PORT1 = 8000;

app.get("/users",(req,res)=>{
    return res.json(users);
});


app.listen(PORT1,()=> console.log('SERVER STARTED ON PORT NO' +PORT1)); 
