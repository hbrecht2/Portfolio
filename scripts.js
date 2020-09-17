var canvas = document.querySelector("canvas");

//Set width and height of canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Create canvas drawing
var c = canvas.getContext("2d");
drawCanvas();
setInfoDivStyle();
setProjectSizes();
setNavBtnPos()

//Resize canvas on resize of page
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCanvas();
  setInfoDivStyle();
  setProjectSizes();
  setNavBtnPos();
});

$('#submitBtn').click(function(e){
      var nameCompany = $('#nameCompany').val()
      var email = $('#email').val()
      var subject = $('#subject').val()
      var message = $('#message').val()

      e.preventDefault();

      $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: {nameCompany: nameCompany, email: email, subject: subject, message: message},
          success: function (data) {
              if(data === "1"){
                  $('#contactFormFields')[0].reset()
                  $('#contactFormSentMessage').text("Thank you for reaching out. I will be in touch soon.")
                  }else{
                      alert(data)
                  }
          },
          error: function (data) {
              alert("An error occurred while sending your message. Please try again or contact me directly at brechthl26@gmail.com.")
          }
      });
})

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

function setInfoDivStyle() {
  var infoDiv = document.getElementById("info");
  infoDiv.style.top = window.innerHeight - infoDiv.offsetHeight + "px";
}

function setProjectSizes(){
    var projectImg = document.getElementsByClassName("projectImg");
    for (var i=0; i<projectImg.length; i++){
        projectImg[i].style.height = projectImg[i].offsetWidth/2 + "px";
    }
}


function setNavBtnPos(){
  var navButtonDivs = document.getElementsByClassName("pageNavigation");
  var multiplier = 2
  for (var i=0; i<navButtonDivs.length; i++){
    navButtonDivs[i].style.top = window.innerHeight * multiplier - navButtonDivs[i].offsetHeight + "px";
    multiplier += 1
  }
}


