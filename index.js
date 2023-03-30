const { urlencoded } = require('body-parser');
const express=require('express');
const { ftruncateSync } = require('fs');
const path=require('path');
const port=8000;

const db=require('./config/mongoose');
const Todolist = require('./models/todo');

const app=express();

//static folder
app.use(express.static('assets'));


app.set('view engine','ejs');
//setting the value of property inside app

app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());


//handling the get request and traversing the list and passing
//the todo to get traversed in  index.ejs

app.get('/',function(req,res){

Todolist.find({},function(err,todo){
    if(err){
        console.log('error in fetheing contacts');
        return;
    }
    res.render('index',{
    title:"bdia",
    todo_list:todo
});
});
});




app.get('/practice',function(req,res){
     res.render('practice');
});



//handling the post request from the form in index.ejs
app.post('/createform',function(req,res){

Todolist.create({
    todo:req.body.todo,
    date:req.body.date,
    category:req.body.category
});
    return res.redirect('back');
});




app.get('/delete',function(req,res){
let id=req.query.id;




//delelteing the contact from the database and refereing back to the 
//home or index page
//redirecting back
Todolist.findByIdAndDelete(id,function(err){
    if(err){
    console.log(" error occured not deleted");
    return;
    }
}); 

return res.redirect('back');
});



//startin the server
app.listen(port,function(err){
    if(err){
        console.log("kuch tho gdbd hai");
    }
    console.log("cal rha hu is port pr",port);
})
