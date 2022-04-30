function verify(){
  username = document.getElementById("uid");
  password = document.getElementById("uid_pw");

  alert(`Usuário: ${username.value}\nSenha: ${password.value}`);
}

var pwvis = false;
function pwvisibility(element){
  if(pwvis == false){
    document.getElementById("uid_pw").type = "text";
    element.src = "../img/auth/closed-eye.svg";
    element.style.transform = "scale(1.25) translateY(88.5%)";
    pwvis = true;
  }
  else{
    document.getElementById("uid_pw").type = "password";
    element.src = "../img/auth/open-eye.svg";
    element.style.transform = "scale(1.1) translateY(100%)";
    pwvis = false;
  }
}