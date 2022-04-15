var lastTab;

function gotoPage(pageid, element){
  screenInfo = document.getElementsByClassName("workablescreen");
  tabOption = document.getElementsByClassName("tabOption");
  currentTab = element.children[0];

  for(i = 0; i < screenInfo.length; i++)
    screenInfo[i].style.display = "none";
  for(i = 0; i < tabOption.length; i++){
    tabOption[i].style.backgroundImage = "linear-gradient(to right, black , rgb(15, 15, 15)";
  }
  
  document.getElementById(pageid).style.display = "block";
  currentTab.style.backgroundImage = "linear-gradient(to right, rgb(191, 64, 191), rgb(179, 102, 204))";
  lastTab = currentTab;
}

function tabEffect(element, n, lastTab){
  tagClass = element.children[0];

  if(tagClass != lastTab){
    if(n == 1){
      tagClass.style.transform = "rotateY(180deg) rotateY(180deg)";
      tagClass.style.backgroundImage = "linear-gradient(to right, rgb(60, 40, 80), rgb(179, 102, 204))";
    }
    else if(n == 0){
      tagClass.style.transform = "rotateY(180deg) rotateY(-180deg)";
      tagClass.style.backgroundImage = "linear-gradient(to right, black , rgb(15, 15, 15)";
    }
  }
}