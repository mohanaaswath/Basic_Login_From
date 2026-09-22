document.getElementById("signup_button").addEventListener('click', function(event){
   event.preventDefault()
   let username = document.getElementById("username").value.trim();
   let email = document.getElementById("email").value.trim();
   let password = document.getElementById("password").value.trim();
   let confirm_password = document.getElementById("confirm password").value.trim();

   let uname_name = document.getElementById("uname-error")
   let email_name = document.getElementById("email-error")
   let password_name = document.getElementById("password-error")
   let cpassword_name = document.getElementById("cpassword-error")
   
   //Mohana Aswath
   let userName_Pattern = /^[A-Za-z]+ [A-Za-z]+$/;
   if(username===""){
     uname_name.innerText="Name is required"
   }
   else if(!userName_Pattern.test(username)){
     uname_name.innerText = "Enter your full name"
   }
   if(email===""){
     email_name.innerText="Email is required"
   }
   if(password===""){
     password_name.innerText="Password is required"
   }
    if(confirm_password===""){
     cpassword_name.innerText="Confirm password is required"
   }
}) 

