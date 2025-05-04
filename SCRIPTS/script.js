let form =  document.getElementById('form');
let emailError=  document.getElementById('email_error');
let email = document.getElementById('email');
let dismissMessage = document.getElementById('dismiss_message');
form.addEventListener('submit',(e)=>{
    if(email.value==='' || email.value==null){
        e.preventDefault();
        emailError.innerHTML=" Valid email is required";
        emailError.style.color="red";
        email.style.border="solid red 0.5px";
        email.style.backgroundColor = "rgba(255, 0, 0, 0.2)"; 
        email.placeholder="ash#loremcompany.com"
    }
})
