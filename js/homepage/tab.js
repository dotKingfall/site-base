function gotoPage(pageid){
  var ws = document.getElementById("workablescreen");
  
  switch(pageid){
    case 2: //descobrir
      ws.innerHTML = "<object data='pages/descobrir.html' width='100%' height='100%'></object>";
      break;

    case 3: //você
      ws.innerHTML = "<object type='text/html' data='pages/voce.html' width='100%' height='100%'></object>";
      break;

    case 4: //sobre
      ws.innerHTML = "<object type='text/html' data='pages/sobre.html' width='100%' height='100%'></object>";
      break;

    default: //homepage
      ws.innerHTML = "<object data='pages/homepage.html' width='100%' height='100%'></object>";
      break;
  }
}

function tabEffect(element, n){
  element = element.children[0];

  if(n == 1){
    element.style.transform = "rotateY(180deg) rotateY(180deg)";
    element.style.backgroundImage = "linear-gradient(to right, black , rgb(15, 15, 15), black)";
  }
  else if(n == 0){
    element.style.transform = "rotateY(-180deg) rotateY(180deg)";
    element.style.backgroundImage = "linear-gradient(to right, black , rgb(15, 15, 15), black)";
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