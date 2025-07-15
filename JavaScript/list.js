var current = 1

function getPrev(){
  if(current-1 == 0 ){
    getImg(1);
  }
  else {
    current = current - 1
    getImg(current);
  }
}

function getNext(){
  if(current+1 == 7 ){
    getImg(6);
  }
  else {
    current = current + 1;
    getImg(current);
  }
}

function getInfo(){
  return "#"+current;
}



function getImg(i){
  var img = document.getElementById("img");
  var source = "../Images/List/img"+i+".jpg"
  img.setAttribute("src", source);

  switch(i){
    case 1: document.getElementById("imgTitle").innerHTML =  "Socotra Cormorant";
                current = 1;
                document.getElementById("dot1").style.background = "lightgrey";
                document.getElementById("dot2").style.background = "white";
                document.getElementById("dot3").style.background = "white";
                document.getElementById("dot4").style.background = "white";
                document.getElementById("dot5").style.background = "white";
                document.getElementById("dot6").style.background = "white";
    break;
    case 2: document.getElementById("imgTitle").innerHTML = "Dugong";
                  current = 2;
                  document.getElementById("dot2").style.background = "lightgrey";
                  document.getElementById("dot1").style.background = "white";
                  document.getElementById("dot3").style.background = "white";
                  document.getElementById("dot4").style.background = "white";
                  document.getElementById("dot5").style.background = "white";
                  document.getElementById("dot6").style.background = "white";
    break;
    case 3: document.getElementById("imgTitle").innerHTML = "Houbara Bustard";
                  current = 3;
                  document.getElementById("dot3").style.background = "lightgrey";
                  document.getElementById("dot1").style.background = "white";
                  document.getElementById("dot2").style.background = "white";
                  document.getElementById("dot4").style.background = "white";
                  document.getElementById("dot5").style.background = "white";
                  document.getElementById("dot6").style.background = "white";
    break;
    case 4: document.getElementById("imgTitle").innerHTML = "Hawksbill Turtle";
                  current = 4;
                  document.getElementById("dot4").style.background = "lightgrey";
                  document.getElementById("dot1").style.background = "white";
                  document.getElementById("dot2").style.background = "white";
                  document.getElementById("dot3").style.background = "white";
                  document.getElementById("dot5").style.background = "white";
                  document.getElementById("dot6").style.background = "white";
    break;
    case 5: document.getElementById("imgTitle").innerHTML = "Sand Cat";
                  current = 5;
                  document.getElementById("dot5").style.background = "lightgrey";
                  document.getElementById("dot1").style.background = "white";
                  document.getElementById("dot3").style.background = "white";
                  document.getElementById("dot4").style.background = "white";
                  document.getElementById("dot2").style.background = "white";
                  document.getElementById("dot6").style.background = "white";
    break;
    case 6: document.getElementById("imgTitle").innerHTML =  "Arabian Leopard";
                  current = 6;
                  document.getElementById("dot6").style.background = "lightgrey";
                  document.getElementById("dot1").style.background = "white";
                  document.getElementById("dot3").style.background = "white";
                  document.getElementById("dot4").style.background = "white";
                  document.getElementById("dot5").style.background = "white";
                  document.getElementById("dot2").style.background = "white";
    break;
  }
}
