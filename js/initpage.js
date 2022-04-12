function showTooltip(n){
  var ttp = document.getElementById("tooltip")

  if(n == 1)
  {
    ttp.style.opacity = "100%";
    ttp.style.transitionDuration = "2s";
  }
  else
  {
    ttp.style.opacity = "0%";
    ttp.style.transitionDuration = "1s";
  }
}

function homepage(){
  var hp = document.getElementById("homepage");
  document.getElementById("initpage").style.display = "none";
  document.body.style.overflow = "visible";

  hp.style.position = "static";
  hp.style.visibility = "visible";
}