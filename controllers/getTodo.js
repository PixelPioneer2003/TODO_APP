//yha bs hum ek todo create krke usko save krwan hai
const Todo =require("../models/Todo");
// route handler ki jarurat hai
exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200).json(
            {
                success :true,
                data : todos,
                message :"entry fetched succesfully"
            }
        );
    }
    catch(error){
        console.error(error);
        res.status(500).json(
            {
                success :false,
                data : "internal server error",
                message : error.message,
            }
        )
    }
}