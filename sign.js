document.getElementById('Account').addEventListener("click",function(event){
  const password = document.getElementsByClassName('initial-password').value;
  const confirm = document.getElementsByClassName('confirmation').value;
  console.log("initialPassword: "+password);
  console.log('confirmed password :'+ confirm);
  if (initialPassword === confirm){
    alert("Account created Succefully !");
  
  }
  else{
    event.preventDefault();
    alert("password and confirmed password doesn't match. Re-enter password")
  }
});