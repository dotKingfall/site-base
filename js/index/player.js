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