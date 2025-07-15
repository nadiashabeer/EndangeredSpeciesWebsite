function avatarSelect(){
  if(document.getElementById('female').checked){
    document.getElementById('gender').setAttribute("src","../Images/Other/female.jpg")
  }
  else {
    document.getElementById('gender').setAttribute("src","../Images/Other/male.jpg")
  }
}

function animalChange(){
    var option = document.getElementById("Animals").value;
    if (option == "Socotra Cormorant"){
      document.getElementById("animalImg").setAttribute("src","../Images/List/img1.jpg");
    }
    else if (option == "Dugong"){
      document.getElementById("animalImg").setAttribute("src","../Images/List/img2.jpg");
    }
    else if (option == "Houvara Bustard"){
      document.getElementById("animalImg").setAttribute("src","../Images/List/img3.jpg");
    }
    else if (option == "Hawksbil Turtle"){
      document.getElementById("animalImg").setAttribute("src","../Images/List/img4.jpg");
    }
    else if (option == "Sand Cat"){
      document.getElementById("animalImg").setAttribute("src","../Images/List/img5.jpg");
    }
    else if (option == "Arabian Leopard"){
      document.getElementById("animalImg").setAttribute("src","../Images/List/img6.jpg");
    }
}

function verify(){
  if(document.getElementById("check1").checked){
      document.getElementById("warning").innerHTML = "";
      window.alert("Your request to symbolically adopt has been submitted. Thank you for your interest."
                    +"\nWe will contact you soon.");
  }
  else{
      document.getElementById("warning").innerHTML = "Please Agree to Terms & Conditions!";
      document.getElementById("warning").style.color = "red";
  }
}
