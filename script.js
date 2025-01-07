const form = document.getElementById('form');
const username = document.getElementById('username');
const Email = document.getElementById('Email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.classname = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innertext = message;
}

//show success outline
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.classname = 'form-control success';
}

//check email is valid
function isvalidEmail(email) {
    var re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(string(email).tolowerCase());
  }


//Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

   if (username.value === '') {
    showError(username, 'username is require')
   } else if(!isvalidEmail(email.value)){
    showError(email, 'Email is not valid');
   } else {
    showSuccess(username);
   }

   if (Email.value === '') {
    showError(Email, 'Email is require')
   } else {
    showSuccess(Email);
   }

   if (password.value === '') {
    showError(password, 'password is require')
   } else {
    showSuccess(password);
   }

   if (password2.value === '') {
    showError(password2, 'password 2 is require')
   } else {
    showSuccess(password2);
   }
});