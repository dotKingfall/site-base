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
  var tmp = document.getElementById("initpage");
  tmp.style.opacity = "0%";
  
  window.setTimeout(function(){
    window.location.href = "wscreen.html";
  }, 1300)
}