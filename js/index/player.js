var player_active = false;
function showPlayer(){
  ple = document.getElementById("player");
  if(player_active == false){
    ple.style.bottom = "0%";
    player_active = true;
  }
  else{
    ple.style.bottom = "-16%";
    player_active = false;
  }
}