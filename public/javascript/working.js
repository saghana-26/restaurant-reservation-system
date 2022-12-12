
function Signin_redirect(){
  let url="http://localhost:3000/register";
   window.location.assign(url);
}

function Contact_redirect(){
    let url="http://localhost:3000/contact";
   window.location.assign(url);
}

function Login_redirect(){
    let url="http://localhost:3000/home";
   window.location.assign(url);
}

function book_sunset(){
  let url="http://localhost:3000/bsunset";
 window.location.assign(url);
}

function book_barbeque(){
  let url="http://localhost:3000/bbarbeque";
 window.location.assign(url);
}

function book_lacabana(){
  let url="http://localhost:3000/blacabana";
 window.location.assign(url);
}

function book_kabab(){
  let url="http://localhost:3000/bkabab";
 window.location.assign(url);
}

function book_message(){
  let url="http://localhost:3000/bmessage";
 window.location.assign(url);
}

function send_message(){
  alert("message sent");
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  return re.test(String(email).toLowerCase());
}
function login_validate(){
  var email=document.getElementById("mail").value;
  var pin=document.getElementById("pin").value;
  
  var flag=true;

  if(email==""){
    document.getElementById("s3").innerHTML="Email is required";
    flag=false; }
else if(!validateEmail(email) || email==""){
    document.getElementById("s3").innerHTML="invalid email";
     flag=false;}
else{
  document.getElementById("s3").innerHTML="";
   }


if(pin==""){ 
  document.getElementById("s5").innerHTML="Password is required";
  flag=false; }
 else if(pin.length < 8) {  
    document.getElementById("s5").innerHTML = "Password length must be atleast 8 characters";  
    flag=false;  
 }
 else if(pin.length > 15) {  
    document.getElementById("s3").innerHTML = "Password length must not exceed 15 characters";  
    flag=false;  
 } 
 else{
  document.getElementById("s5").innerHTML="";
      }

  if(flag==true){
    let url="http://localhost:3000/home";
      window.location.assign(url);

   }

}

function signin_validation(){
      var nam=document.getElementById("name").value;
      var mobno=document.getElementById("num").value;
      var mail=document.getElementById("mail").value;
      var pin=document.getElementById("pass").value;
      var cpin=document.getElementById("con").value;
      var flag=true;

      if(nam==""){
        document.getElementById("s1").innerHTML="Name is required";
        flag=false; }
       else if(/[0-9]/.test(nam)==true){ 
           document.getElementById("s1").innerHTML="Invalid name";
           flag=false;}
       else{
           document.getElementById("s1").innerHTML="";
       }

      if(mobno==""){
        document.getElementById("s6").innerHTML="Mobile No is required";
        flag=false; }
       else if(/^[0-9]+$/.test(mobno)==false || mobno=="" || mobno.length!=10){
        document.getElementById("s6").innerHTML="Invalid mobile number";
        flag=false;}
       else{
           document.getElementById("s6").innerHTML="";
          }

          if(mail==""){
            document.getElementById("s3").innerHTML="Email is required";
            flag=false; }
       else if(!validateEmail(mail) || mail==""){
            document.getElementById("s3").innerHTML="invalid email";
             flag=false;}
       else{
               document.getElementById("s3").innerHTML="";
           }

           if(pin==""){ 
            document.getElementById("s5").innerHTML="Password is required";
            flag=false; }
           else if(pin.length < 8) {  
              document.getElementById("s5").innerHTML = "Password length must be atleast 8 characters";  
              flag=false;  
           }
           else if(pin.length > 15) {  
              document.getElementById("s3").innerHTML = "Password length must not exceed 15 characters";  
              flag=false;  
           } 
           else{
            document.getElementById("s5").innerHTML="";
                }
            
            if(pin != cpin) {  
                  document.getElementById("s4").innerHTML = "Passwords are not same";  
                  flag=false;  
                } 

            if(flag==true){
            let url="http://localhost:3000/home";
               window.location.assign(url);
          }
}



      