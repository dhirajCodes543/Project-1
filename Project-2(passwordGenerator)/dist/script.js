const pass=document.getElementById('input');
const button=document.getElementById('button');

button.onclick=function(){
    pass.value=""
    let s="";
    let passOption="1234567890!@#$%^&*()[]{};:',<.>/?~`QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    for(let i=0;i<10;i++){
    let randomNumber = Math.floor(Math.random() * passOption.length);
    s+=passOption[randomNumber];
    }
    pass.value=s;
}