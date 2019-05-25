sendForm=()=>{
    
  var emailRegex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;     
  var emailAdr = document.getElementById('exampleInputEmail1').value; 
  var emailResult = emailRegex.test(emailAdr);


  var passwordRegex =/^((?=.*\d)(?=.*[A-Z]).{2,8})$/; 
  var password=document.getElementById('exampleInputPassword1').value; 
  var passwordResult=passwordRegex.test(password);
    
    if (document.forms.myForm.elements.username.value=='') {alert('Enter a user name')}
   
    else if (document.forms.myForm.elements.adress.value==''){alert('Enter your adress')}
   
    else if (document.forms.myForm.elements.email.value=='') {alert('Enter your E-mail')}
   
    // else if (document.forms.myForm.elements.email.value!=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2-8})$/) {alert('Enter a valid E-mail')}

    //  else if (document.forms.myForm.elements.password.value=='') {alert('Enter a password (Password must be enter 2 and 8 characters)')}
   
    // else if (document.forms.myForm.elements.password.value==/^[/w]{2,8}$/) {alert('done!')}

   else if (emailResult == false){alert ('not valid mail')}
   
   else if (emailResult == true){alert ('Enter password ')}
   
   else if (passwordResult == false){alert ('Bad password')}
   
   else if (passwordResult == true){alert ('Done!!')}




    
}

