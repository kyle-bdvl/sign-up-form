const alert = document.querySelector('.passwordAlert');
const password=document.querySelector('#password');
const confirm=document.querySelector('#confirm');

password.addEventListener("keyup" ,e =>{
 if(password.value !==confirm.value) {
    alert.style.display='inline-block';
 }
})

confirm.addEventListener("keyup", e=>{
  if(password.value == confirm.value){
    alert.style.display="none";
    document.querySelector('input[type="password"]:focus').style.outlineColor = "green";
  }
})