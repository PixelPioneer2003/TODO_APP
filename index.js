const express=require('express');
const app=express();
// app.listen(3000,()=>{
//     console.log("port 3000");
// })
require("dotenv").config();
const port =process.env.port || 4000;
//parser ki need to parse json request body
app.use(express.json());  
// import routes 
const todoRoutes=require("./routes/todos"); 
// mount th todo api routes   
app.use('/api/v1',todoRoutes);
//now start the server 
app.listen(port,()=>{
    console.log("server stated at prot no"+ port);
})
//connect to the database 
const dbConnect=require("./config/databse");
dbConnect(); 
// default route 
app.get("/",(req,res)=>{
    res.send('<h1> THis is h1</h1>');
})