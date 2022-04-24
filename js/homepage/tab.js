window.onload = function(){
  var hp = document.getElementsByClassName("tabOption")[0].children;
  hp[0].style.color = "rgb(191, 64, 191)";
  hp[1].style.width = '7vmax';
  gotoPage(0);
};
var currentTab;

function gotoPage(pageid){
  var ws = document.getElementById("workablescreen");
  var tabs = document.getElementsByClassName("tabOption");

  switch(pageid){
    case 1: //descobrir
      currentTab = 1;
      ws.innerHTML = "<object data='pages/descobrir.html' width='100%' height='100%'></object>";
      break;

    case 2: //você
      currentTab = 2;
      ws.innerHTML = "<object type='text/html' data='pages/voce.html' width='100%' height='100%'></object>";
      break;

    case 3: //sobre
      currentTab = 3;
      ws.innerHTML = "<object type='text/html' data='pages/sobre.html' width='100%' height='100%'></object>";
      break;

    default: //homepage
      currentTab = 0;
      ws.innerHTML = "<object data='pages/homepage.html' width='100%' height='100%'></object>";
      break;
  }

  for(i = 0; i < tabs.length; i++){
    if(currentTab != i){
      tabs[i].children[1].style.width = "0";
      tabs[i].children[0].style.color = "white";
    }
  }
}

function te(id, n, element, px){
  var element = element.children;

  if(id != currentTab)
  {
    if(n == 1){
      element[0].style.transform = "rotateY(180deg) rotateY(180deg)";
      element[1].style.width = px;
    }
    else if(n == 0){
      element[0].style.transform = "rotateY(-180deg) rotateY(180deg)";
      element[1].style.width = "0";
    }
  }
  else{
    element[0].style.transform = "rotateY(0deg) rotateY(0deg)";
    element[0].style.color = "rgb(191, 64, 191)";
  }
}