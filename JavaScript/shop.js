var count = 0;
var n1=1;
var n2=1;
var n3=1;
var name;



var gifts = ["Birds Of the World Book","Dugong Plushy","Houbara Bustard Tote Bag","Hawksbill Turtle Toy","Sand Cat Free Size Shirt","Arabian Leopard Toy"];
var prices = ["AED 115","AED 60","AED 75","AED 95.50","AED 150","AED 100"];
var i = 0;
document.write("<table>");
for(var rows = 1; rows<=2; rows++){
  document.write("<tr>");
   while (i < gifts.length) {
    document.write("<td><img src='../Images/Shop/gift"+i+".jpg' height='250'>");
    document.write("<h3>"+gifts[i]+"</h3><h3>"+prices[i]+"</h3>");
    document.write("<input  type='button' value='Buy' onclick = 'buyGift("+i+")'></td>");
    if (i == 2){
      break;
    }
    i++;
   }
  document.write("</tr>");
  i++;
 }

document.write("<tr><td colspan='3' style='background-color:lightgrey'>Your donation provides general support and makes you a member."+
  "83% of spending is directed to U.A.E. conservation activities." +
  "<br>" +
  "Our donation process is fully encrypted to ensure all personal and financial information is kept secure." +
  "</td></tr>")
document.write("</table>");



function buyGift(i){
  window.alert("Thank you for purchasing " +gifts[i]+"! \nAll proceedings go to charity.")
}





function playGame(){
  count++;
  if(count%2 == 0){
    check();
  }
  else{
    name = window.prompt("Enter your name");
    var checkbtn = document.getElementById("playbtn");
    checkbtn.setAttribute("value","DONE");
    document.getElementById("info").innerHTML = "HINT: Match the names to the animal pictures.";
    document.getElementById("info").style.color = "black";

    n1 = Math.floor(Math.random() * 6 + 1 );
    while(true){
      n2 = Math.floor(Math.random() * 6 + 1 );
      if(n2!=n1){
        break;
      }
    }
    while(true){
      n3 = Math.floor(Math.random() * 6 + 1 );
      if(n3!=n1 && n3!=n2){
        break;
      }
    }

   var im1 = document.getElementById("img1");
   var im2 = document.getElementById("img2");
   var im3 = document.getElementById("img3");

   im1.setAttribute("src", "../Images/List/img"+n1+".jpg");
   im2.setAttribute("src", "../Images/List/img"+n2+".jpg");
   im3.setAttribute("src", "../Images/List/img"+n3+".jpg");
  }
}

function check(){
  var checkbtn = document.getElementById("playbtn");
  checkbtn.setAttribute("value","PLAY");
  var anscount = 0;
  var j = 1;
   while(j<=3){
    if(j == 1){
      var check = n1;
      var answer = document.getElementById("txt1").value;
      // console.log(check);
      // console.log(answer);
    }
    else if(j == 2){
      check = n2;
      answer = document.getElementById("txt2").value;
      // console.log(check);
      // console.log(answer);
    }
    else {
      check = n3;
      answer = document.getElementById("txt3").value;
      // console.log(check);
      // console.log(answer);
    }

    switch(check){
      case 1:
        if ( answer == "Socotra Cormorant")
          ++anscount;
      break;
      case 2:
        if (answer == "Dugong")
          ++anscount;
      break;
      case 3:
        if (answer == "Houbara Bustard")
          ++anscount;
      break;
      case 4:
        if (answer == "Hawksbill Turtle")
          ++anscount;
      break;
      case 5:
        if (answer == "Sand Cat")
          ++anscount;
      break;
      case 6:
        if (answer == "Arabian Leopard")
          ++anscount;
      break;
    }
      j++;
  }
  // console.log(anscount)
  if(anscount == 3){
    document.getElementById("info").innerHTML = "Congratulation "+name+"! YOU WON";
    document.getElementById("info").style.color = "red";
  }
  else{
    document.getElementById("info").innerHTML = "Sorry "+name+"! YOU LOST";
    document.getElementById("info").style.color = "red";
  }
}
