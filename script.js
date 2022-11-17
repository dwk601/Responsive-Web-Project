/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const themeToggle = document.querySelector("#theme-toggle");
const body = document.querySelector("body");

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    // if toggle is on then add dark class to body
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  } else {
    // if toggle is off then remove dark class from body
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
  }
});
