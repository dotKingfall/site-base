function verify(){
  username = document.getElementById("uid");
  password = document.getElementById("uid_pw");

  alert(`Usuário: ${username.value}\nSenha: ${password.value}`);
}

var pwvis = false;
function pwvisibility(element){
  if(pwvis == false){
    document.getElementById("uid_pw").type = "text";
    element.src = "../img/auth/open-eye.svg";
    pwvis = true;
  }
  else{
    document.getElementById("uid_pw").type = "password";
    element.src = "../img/auth/closed-eye.svg";
    pwvis = false;
  }
}