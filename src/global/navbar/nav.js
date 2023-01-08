//navbar responsive
function navBar() {
  var x = document.getElementById("myTopnav");
  // console.log(x);
  if (x.className === "topnav") {
    x.className += " responsive";
    x.style = "display";
  } else {
    x.className = "topnav";
  }
}

//date
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};
const dateElement = document.getElementById("date");
var prnDt = new Date().toLocaleTimeString("en-us", options);
dateElement.textContent = "- " + prnDt.slice(0, 24) + "-";
