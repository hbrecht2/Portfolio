var canvas = document.querySelector("canvas");

//Set width and height of canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Create canvas drawing
var c = canvas.getContext("2d");
drawCanvas();
getScale();

//Resize canvas on resize of page
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCanvas();
  getScale();
});

function drawCanvas() {
  //Draw Triangle Background
  c.beginPath();
  c.moveTo(0, 0);
  c.lineTo(0, window.innerHeight);
  //Subtracts 15px to account for scroll bars
  c.lineTo(window.innerWidth - 15, window.innerHeight);
  c.fillStyle = "#9F838C";
  c.fill();
}

function getScale() {
  if (window.innerWidth > 1007) {
    scaleElementsLg();
    console.log("large");
  } else if (window.innerWidth > 640 && window.innerWidth < 1007) {
    scaleElementsMed();
    console.log("med");
  } else if (window.innerWidth < 641) {
    scaleElementsSm();
    console.log("sm");
  }
}

function scaleElementsLg() {
  var infoDiv = document.getElementById("info");
  var infoDivHeight = infoDiv.offsetHeight;
  var windowHeight = window.innerHeight;

  var topPos = windowHeight - (infoDivHeight + 50);

  infoDiv.style.top = topPos + "px";
  infoDiv.style.margin = " 0 0 0 25px"

  var nameWidth = window.innerWidth * (9 / 16);
  var nameElement = document.getElementById("name");
  nameElement.style.width = nameWidth + "px";
  nameElement.style.fontSize = "6.6vw";

  var description = document.getElementById("description");
  description.style.width = window.innerWidth * (5 / 7) + "px";
  description.style.fontSize = "1.5vw";
}

function scaleElementsMed() {
  var nameElement = document.getElementById("name");
  nameElement.style.marginTop = window.innerHeight * (3 / 4) + "px";
  nameElement.style.width = window.innerWidth * (3 / 5) + "px";
  nameElement.style.fontSize = "7vw";

  var description = document.getElementById("description");
  description.style.width = window.innerWidth * (5 / 7) + "px";
  description.style.fontSize = "2.5vw";
}

function scaleElementsSm() {
  var nameElement = document.getElementById("name");
  nameElement.style.marginTop = window.innerHeight * (4 / 5) + "px";
  nameElement.style.fontSize = "8vw";

  var description = document.getElementById("description");
  description.style.width = window.innerWidth * (5 / 7) + "px";
  description.style.fontSize = "2vw";
}
