var musicPlaying = false; //Se alguma música estiver tocando, essa variável deve ser true
function playsong(c, n = 0){
  if(c == 1){}
  else if(c == 2){}

  if(n == 1){}
}

function shouldOverflow(){
  element = document.getElementById("song_name");
  if(element.offsetWidth >= 168){
    element.style.transform = "translateX(60%)";
    element.style.animationPlayState = "running";
  }
}

function copysongname(){
  var songname = document.getElementById("song_name");
  var copymessage = document.getElementById("copybutton").children[1];
  navigator.clipboard.writeText(songname.innerText);

  copymessage.innerText = "COPIADO!";
  setTimeout(function (){copymessage.innerText = "COPIAR"}, 2000);
}

var player_active = false;
function showPlayer(){
  ple = document.getElementById("playerws");
  if(player_active == false){
    ple.style.transform = "translateX(0px)";
    ple.style.visibility = "visible";
    shouldOverflow();
    player_active = true;
  }
  else{
    ple.style.transform = "translateX(-180px)";
    ple.style.visibility = "hidden";
    player_active = false;
  }
}