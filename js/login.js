function handleSubmit(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    let valid = true;
    emailError.innerText = "";
    passwordError.innerText = "";
    console.log(password)
    if(!validateEmail(email)){
        emailError.innerText = "Email Inválido";
        valid = false;
    }

    if(!validatePassword(password)){
        passwordError.innerText = "Senha precisa de pelo menos 6 caracteres";
        valid = false;
    }
    
    if(valid){
       alert("Login bem sucedido")
    }
    
}

function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePassword(password){
    return password.length > 5;
}

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click',handleSubmit);