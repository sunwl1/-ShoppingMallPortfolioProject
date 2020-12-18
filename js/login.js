const username = document.getElementById("username");
const password = document.getElementById("password");
username.addEventListener('focus', ()=>{
    document.querySelector('.username').style.fontSize = '0.75rem';
    document.querySelector('.username').style.top = '0';
});
username.addEventListener('blur', ()=>{
    if(username.value != '') return;
    document.querySelector('.username').style.fontSize = '1rem';
    document.querySelector('.username').style.top = '1.4375rem';
});
password.addEventListener('focus', ()=>{
    document.querySelector('.password').style.fontSize = '0.75rem';
    document.querySelector('.password').style.top = '0';
});
password.addEventListener('blur', ()=>{
    if(password.value != '') return;
    document.querySelector('.password').style.fontSize = '1rem';
    document.querySelector('.password').style.top = '1.4375rem';
});