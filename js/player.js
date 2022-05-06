var musicPlaying = false; //Se alguma música estiver tocando, essa variável deve ser true
function playsong(c, n = 0){
  if(c == 1){}
  else if(c == 2){}

  if(n == 1){}
}

var player_active = false;
function showPlayer(){
  ple = document.getElementById("playerws");
  if(player_active == false){
    ple.style.width = "180px";
    player_active = true;
  }
  else{
    ple.style.width = "0px";
    player_active = false;
  }
}