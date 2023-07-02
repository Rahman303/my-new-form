function changeToRegister() {
   const loginPage = document.querySelector(".main-page");
   const registerPage = document.querySelector(".register-page");
   loginPage.replaceChildren()
   registerPage.style.visibility="visible"
}


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#psw');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

const togglePasswordCfrm = document.querySelector('#togglePasswordCfrm');
const passwordConfirm = document.querySelector('#cf-psw');

togglePasswordCfrm.addEventListener('click', function (e) {
   // toggle the type attribute
   const type = passwordConfirm.getAttribute('type') === 'password' ? 'text' : 'password';
   passwordConfirm.setAttribute('type', type);
   // toggle the eye slash icon
   this.classList.toggle('fa-eye-slash');
 });




function submitForm(){
   let userName = document.querySelector("#usrname")
   let email = document.querySelector("#rg-email")
   let firstPassword = document.getElementById("psw")
   let confirmPassword = document.querySelector("#cf-psw")

   // const errorMessage = document.querySelector("#error-message")

   const paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,15}$/;
   var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
   const letters = /^[A-Za-z]+$/;

   if(userName.value==""&&email.value==""&&firstPassword.value==""&&confirmPassword.value==""){
      userName.style.border="2px solid #cb56569e"
      email.style.border="2px solid #cb56569e"
      firstPassword.style.border="2px solid #cb56569e"
      confirmPassword.style.border="2px solid #cb56569e"
   }else if(!letters.test(userName.value)){
      userName.style.border="2px solid #cb56569e";
   }else if (!email_val.test(email.value)){  
      email.style.border="2px solid #cb56569e"; 
   }else if(!firstPassword.value.match(paswd)){
      firstPassword.style.border="2px solid #cb56569e";
   }else if(firstPassword.value!=confirmPassword.value){
      confirmPassword.style.border="2px solid #cb56569e";
   } else{
      window.location="https://www.linkedin.com/in/rahman-zeynalov-925065258/"
}}
