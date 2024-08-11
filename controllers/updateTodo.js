//yha bs hum ek todo create krke usko save krwan hai
const Todo =require("../models/Todo");
// route handler ki jarurat hai
exports.updateTodo=async(req,res)=>{
    try{
        // extract todo item on the basis of id
        const id=req.params.id;
        const{title,description}=req.body;
        const todo=await Todo.findByIdAndUpdate(
            {_id : id},
            {title,description,UpdatedAt : Date.now()} 
            );
            res.status(200).json(
                {
                    success :true,
                    data : todo,
                    message :"entry updated succesfully"
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