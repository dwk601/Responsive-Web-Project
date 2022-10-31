/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var figure = $(".video").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
  $("video", this).get(0).play();
}

function hideVideo(e) {
  $("video", this).get(0).pause();
}
