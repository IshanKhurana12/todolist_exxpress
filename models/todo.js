//requirre moongose

const mongoose=require('mongoose'); 


//create a schema
const todolist_controller=new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
    }

});

//make a model

const Todolist=mongoose.model('Todolist',todolist_controller);

//this is just export
module.exports=Todolist;