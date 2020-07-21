const express=require('express');
const path=require('path');
const port=9000;

    
const db=require('./config/mongoose');
const TodoList=require('./model/Todo');
const app=express();
app.use(express.urlencoded());

app.use(express.static('assests'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));







app.get('/',function(req,res){

    TodoList.find({},function(err,Todo){
        if(err){
            console.log('err');
            return;
            
        }
        return res.render('home',{
            title:"TodoList",
            desk:Todo
        });
    });
    // res.render('home',{title:"Helloowwwoo!!!",
    // desk:Contact
});



app.post('/contact',function(req,res){

// Contact.push(req.body);

// console.log(req.body);

TodoList.create({
description:req.body.description,
cars:req.body.cars,
date:req.body.date

},function(err,Todolist){
    if(err){
        console.log('error');
        return;
    }

console.log('*******',Todolist);
return res.redirect('back');


});




});
app.post('/delete',function(req,res){
    // console.log(req.body);
    let values = Object.keys(req.body);
    console.log(values);
    
    for( i of values){

         TodoList.findByIdAndDelete(i,function(err){
                if(err){
                    console.log('error');
                    return;
                }
            //    res.end();

        
            });      
        }
        return res.redirect("back")
        });

app.listen(port,function(err){
    if(err){
        console.log('err',err);
        
    }
    console.log('success',port);
    
})