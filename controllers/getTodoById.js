//yha bs hum ek todo create krke usko save krwan hai
const Todo =require("../models/Todo");
// route handler ki jarurat hai
exports.getById=async(req,res)=>{
    try{
        // extract todo item on the basisof id
        const id=req.params.id;
        const todos=await Todo.findById({_id : id});
        if(!todos){
            res.status(404).json(
                {
                    success :false,
                    data : "no such item ",
                    message :"error in findig such item"
                }
            );
        }
        else{
            res.status(200).json(
                {
                    success :true,
                    data : todos,
                    message :"entry fetched succesfully"
                }
            );
        }
        
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