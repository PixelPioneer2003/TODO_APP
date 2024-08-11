const express=require('express');
// route cretae karna hai toh router ki help se
const router=express.Router();
//import krna hai cotroller ko
const {createTodo}=require("../controllers/createtodo") ;
const {getTodo}=require("../controllers/getTodo") ;
const{getById}=require("../controllers/getTodoById");
const{updateTodo}=require("../controllers/updateTodo") ;
const{deleteTodo}=require("../controllers/deleteTodo") ;
// define api routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodoById/:id",getById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports=router;