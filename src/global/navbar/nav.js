function navBar(){
    var x = document.getElementById("myTopnav");
    // console.log(x);
    if (x.className === "topnav") {
      x.className += " responsive";
      x.style = "display"
    }else{
      x.className = "topnav";
    }
  };
