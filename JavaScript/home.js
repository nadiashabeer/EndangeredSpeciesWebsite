function donateAlert(amt){
    if(amt == 50 || amt == 100 || amt == 200 || amt == 500){
      amt += amt*5/100;
      window.alert("You are donating AED "+ amt +" to FaunAid (5% Service Fee) \nThank You!");
    }
    else {
      var other = parseFloat(document.getElementById("other").value);
      other += other*5/100;
      window.alert("You are donating AED "+ other +" to FaunAid (5% Service Fee) \nThank You!");
    }
}
