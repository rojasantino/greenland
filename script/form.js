const form = document.querySelector('.rightcon');
const errorBox = document.getElementById('errorbox');

/*form elements */
let name = form.querySelector('input[type="text"]');
let email = form.querySelector('input[name="email"]');
let address = form.querySelector('input[name="address"]');
let number = form.querySelector('input[type="number"]');
let service = form.getElementsByTagName('select')[0];
let message = form.getElementsByTagName('textarea')[0];
/*form elements*/
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  errorTesting();
})

function errorTesting(){
if((name.value == "")||(email.value == "")||(address.value == "")||(number.value == "")||(message.value == "")){
errorBox.textContent = "Input fields are empty!";
errorBox.style.color = 'red';
return;
}
let pattern = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]{2,3}$/;
if(!pattern.test(email.value)){
errorBox.textContent = "Email is not valid!";
errorBox.style.color = 'red';
return;
}

let pattern2 = /^[0-9]{10}$/;
if(!pattern2.test(number.value)){
    errorBox.textContent = "mobile-no is not valid!";
    errorBox.style.color = 'red';
    return; 
}
let xhr = new XMLHttpRequest();
 xhr.onload = ()=>{
  if(xhr.readyState === XMLHttpRequest.DONE){
    if(xhr.status === 200){
      let result = xhr.response;
      console.log(result);
    }
  }
 }
xhr.open('post','includes/form.php',true);
let formData = new FormData(form)
xhr.send(formData);
}



let newsletter_error = document.getElementById('newsletter_err');
let input = document.getElementById('newsletter_input');
let form2 = document.getElementById('form');
let checkbox = document.getElementById('checkbox');
form2.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(input.value == ""){
        newsletter_error.textContent = '*input field is required';
        newsletter_error.style.color  = 'red';
        return;
    }
    if(!checkbox.checked){
        newsletter_error.textContent = '*checkbox required';
        newsletter_error.style.color  = 'red';
        return;
    }
    input.value = "";
    newsletter_error.textContent = "Registered Successfully";
    newsletter_error.style.color = 'blue';

})

