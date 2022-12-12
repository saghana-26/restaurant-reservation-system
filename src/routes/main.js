const express= require('express')
const restRouter= express.Router()


restRouter.get('',async(req,res) =>{
    res.render('main',{title:"web"});
}); 
restRouter.get('/register',async(req,res) =>{
    res.render('SignIn',{title:"signIn form"});
});
restRouter.get('/home',async(req,res) =>{
    res.render('home',{title:"food point"});
});
restRouter.get('/login',async(req,res) =>{
    res.render('main',{title:"food point"});
});
restRouter.get('/bsunset',async(req,res) =>{
    res.render('sunset',{title:"food point"});
});
restRouter.get('/bbarbeque',async(req,res) =>{
    res.render('barbeque',{title:"food point"});
});
restRouter.get('/bkabab',async(req,res) =>{
    res.render('kabab',{title:"food point"});
});
restRouter.get('/blacabana',async(req,res) =>{
    res.render('lacabana',{title:"food point"});
});
restRouter.get('/bmessage',async(req,res) =>{
    res.render('message',{title:"food point"});
});
restRouter.get('/contact',async(req,res) =>{
    res.render('contact',{title:"food point"});
});
restRouter.get('/reserve',async(req,res) =>{
    res.render('contact',{title:"food point"});
});
restRouter.get('/confrim',async(req,res) =>{
    res.render('confirm',{title:"food point"});
});



module.exports= restRouter;