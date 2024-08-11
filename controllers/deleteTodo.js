//yha bs hum ek todo create krke usko save krwan hai
const Todo =require("../models/Todo");
// route handler ki jarurat hai
exports.deleteTodo=async(req,res)=>{
    try{
        // extract todo item on the basis of id
        const id=req.params.id;
        await Todo.findByIdAndDelete(id);
            res.status(
                {
                    success :true,
                    message :"entry deleted succesfully"
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