const mongoose=require('mongoose');

const Todolist=new mongoose.Schema({
    description:{
    type:String,
    required:true
},
cars:{

    type:String,
    required:true
},
date:{
type:String,

}


});

const TodoList=mongoose.model('Todo',Todolist);
module.exports=TodoList;
