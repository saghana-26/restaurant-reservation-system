const express= require('express');
const reserveModel = require('./src/models/reserve');
const app =express();
const qr=require("qrcode");
const reserveSchema=require("./src/models/reserve");
const register=require('./src/models/register');
const reserve=require('./src/models/reserve');
/*var sessions=require('express-session');
const cookieParser=require('cookie-parser');
const {send}= require('process');
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.use(cookieParser());

var session;*/

const port = process.env.PORT|| 3000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true}));


app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/javascript', express.static(__dirname + 'public/javascript'))

require('./src/models/database');


app.set('views','./src/views/pages')
app.set('view engine','ejs')

const restRouter = require('./src/routes/main');
const registerModel = require('./src/models/register');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', restRouter);
app.use('/register', restRouter);
app.use('/reserve',restRouter);





app.post('/home',async(req,res)=>{
    try{
         const pass=req.body.pd;
         const conpass=req.body.cpd;
        

         if(pass  === conpass ){
            const registeruser= new register({
                nam: req.body.username,
                number: req.body.number,
                mail:req.body.email,
                pass:pass,
                conpass:conpass

            })
           const registered =await  registeruser.save();
           
           res.status(201).render("home");
         }else{
            res.send("password not matching"); 
         }

      }catch(error){
        res.status(400).send(error);
    }
})

app.post("/login",async(req,res)=>{
    try{
           const email=req.body.email;
           const password=req.body.password;
           console.log(`${email} and password is ${password}`)
           const useremail=register.findOne({mail:email});
           
           if(useremail.pass === password){
               res.status(201).render("home");
           }else{
            res.render("password not matching");
           }
    }catch(error){
        res.status(400).send("invalid email")
    }
})
app.post('/confirm',async(req,res)=>{
    try{
        const reserveuser= new reserve({
                name: req.body.name,
                phonenum: req.body.phone,
                Rsize:req.body.people,
                Rdate:req.body.date,
                Rtime:req.body.timing

            })
           const reserved =await  reserveuser.save();
           res.status(201).render("confirm");
          
        }catch(error){
        res.status(400).send(error);
    }
})



app.listen(port,()=>{console.log("listening to the server on http://localhost:3000")});