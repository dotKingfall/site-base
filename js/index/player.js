var musicPlaying = false; //Se alguma música estiver tocando, essa variável deve ser true
function playsong(){
  //
}

var player_active = false;
function showPlayer(){
  ple = document.getElementById("player");
  if(player_active == false){
    ple.style.height = "90px";
    player_active = true;
  }
  else{
    ple.style.height = "0px";
    player_active = false;
  }
}