//yha bs hum ek todo create krke usko save krwan hai
const Todo =require("../models/Todo");
// route handler ki jarurat hai
exports.createTodo=async(req,res)=>{
    try{
        const {title,description}=req.body;
        // create a new todo object and insert into db
        const response =await Todo.create({title,description});
        // send a json response with success flag
        res.status(200).json(
            {
                success :true,
                data : response,
                message :"entry created succesfully"
            }
        );
    }
    catch(error){
        console.error(error);
        res.status(500).json(
            {
                success :false,
                data : "internal server error",
                message : error.message
            }
        )
    }
}