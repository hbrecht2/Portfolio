var canvas = document.querySelector("canvas");

//Set width and height of canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Create canvas drawing
var c = canvas.getContext("2d");
drawCanvas();

console.log(canvas.height);

//Resize canvas on resize of page
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCanvas();
});



function drawCanvas(){
  //Draw Triangle Background
  c.beginPath();
  c.moveTo(0, 0);
  c.lineTo(0, window.innerHeight);
  c.lineTo(window.innerWidth, window.innerHeight);
  c.fillStyle = "#9F838C";
  c.fill();
}