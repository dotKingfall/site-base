var currentTab = 99;

function gotoPage(pageid){
  var ws = document.getElementById("workablescreen");
  //var tabs = document.getElementById("tabs");

  
  switch(pageid){
    case 2: //descobrir
      currentTab = 2;
      ws.innerHTML = "<object data='pages/descobrir.html' width='100%' height='100%'></object>";
      break;

    case 3: //você
      currentTab = 3;
      ws.innerHTML = "<object type='text/html' data='pages/voce.html' width='100%' height='100%'></object>";
      break;

    case 4: //sobre
      currentTab = 4;
      ws.innerHTML = "<object type='text/html' data='pages/sobre.html' width='100%' height='100%'></object>";
      break;

    default: //homepage
      currentTab = 1;
      ws.innerHTML = "<object data='pages/homepage.html' width='100%' height='100%'></object>";
      break;
  }
}

function te(id, n, element, px){
  var element = element.children;

  if(id != currentTab)
  {
    if(n == 1){
      //incluir underline
      element[0].style.transform = "rotateY(180deg) rotateY(180deg)";
    }
    else if(n == 0){
      element[0].style.transform = "rotateY(-180deg) rotateY(180deg)";
    }
  }
  else{
    element[0].style.transform = "rotateY(0deg) rotateY(0deg)";
  }
}

//screenInfo = document.getElementsByClassName("workablescreen");
//tabOption = document.getElementsByClassName("tabOption");

//for(i = 0; i < screenInfo.length; i++)
//  screenInfo[i].style.display = "none";
//for(i = 0; i < tabOption.length; i++){
//  tabOption[i].style.backgroundImage = "linear-gradient(to right, black , rgb(15, 15, 15), black)";
//}

//document.getElementById(pageid).style.display = "block";
//element.style.backgroundImage = "linear-gradient(to right, rgb(191, 64, 191), rgb(179, 102, 204))";
//lastTab = element;