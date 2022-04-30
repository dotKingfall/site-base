window.onload = function(){
  screenSize();
}

function screenSize(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  if(w >= h) return;
  else{
    var namefield = document.getElementById("uid");
    var pwfield = document.getElementById("uid_pw");

    document.getElementById("limit").style.marginLeft = "29vw";

    namefield.style.height = "35px"; 
    pwfield.style.height = "35px";
    namefield.style.width = "200px"; 
    pwfield.style.width = "200px";
  }
}

window.addEventListener("resize", screenSize);

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
    element.style.transform = "scale(1.25)";
    pwvis = true;
  }
  else{
    document.getElementById("uid_pw").type = "password";
    element.src = "../img/auth/open-eye.svg";
    element.style.transform = "scale(1.1)";
    pwvis = false;
  }
}