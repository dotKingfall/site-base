var lastTab;

function gotoPage(pageid, element){
  screenInfo = document.getElementsByClassName("workablescreen");
  tabOption = document.getElementsByClassName("tabOption");

  for(i = 0; i < screenInfo.length; i++)
    screenInfo[i].style.display = "none";
  for(i = 0; i < tabOption.length; i++){
    tabOption[i].style.backgroundImage = "linear-gradient(to right, black , rgb(15, 15, 15), black)";
  }
  
  document.getElementById(pageid).style.display = "block";
  //element.style.backgroundImage = "linear-gradient(to right, rgb(191, 64, 191), rgb(179, 102, 204))";
  lastTab = element;
}

function tabEffect(element, n, lastTab){
  element = element.children[0];

  if(element != lastTab){
    if(n == 1){
      element.style.transform = "rotateY(180deg) rotateY(180deg)";
      element.style.backgroundImage = "linear-gradient(to right, black , rgb(15, 15, 15), black)";
    }
    else if(n == 0){
      element.style.transform = "rotateY(-180deg) rotateY(180deg)";
      element.style.backgroundImage = "linear-gradient(to right, black , rgb(15, 15, 15), black)";
    }
  }
}