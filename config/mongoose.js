//first require moonqoose

const mongoose=require('mongoose');

//connect to the  database

mongoose.connect('mongodb://0.0.0.0:27017/todo_db');



//acquire the connection(to check if its successfull)
const db=mongoose.connection;

//if there is error then this
db.on('error',console.error.bind(console,'error connceting to db'));


//if connection is established then this
db.once('open',function(){
    console.log("successfully connected to the database");
});


//include this file in index.js