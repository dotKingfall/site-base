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

function autoScroll(times){
  var tmp = setInterval(function (){
    if(times <= 0) clearInterval(tmp);
    window.scrollBy(0, 10);
    times--;
  }, 10);
}

function homepage(){
  var hp = document.getElementById("homepage");

  hp.style.position = "static";
  hp.style.visibility = "visible";

  autoScroll(47);

  setTimeout(function (){
    document.getElementById("initpage").style.display = "none";
    document.body.style.overflow = "visible";
  }, 1300);
}