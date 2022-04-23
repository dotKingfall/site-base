var currentTab = 99;

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
    if(currentTab == i){
      
    }
    else{
      tabs[i].children[1].style.width = "0";
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
  }
}
//tabOption = document.getElementsByClassName("tabOption");

//for(i = 0; i < screenInfo.length; i++)
//  screenInfo[i].style.display = "none";
//for(i = 0; i < tabOption.length; i++){
//  tabOption[i].style.backgroundImage = "linear-gradient(to right, black , rgb(15, 15, 15), black)";
//}

//document.getElementById(pageid).style.display = "block";
//element.style.backgroundImage = "linear-gradient(to right, rgb(191, 64, 191), rgb(179, 102, 204))";
//lastTab = element;