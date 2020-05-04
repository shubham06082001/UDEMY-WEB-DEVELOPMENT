// alert("hello");
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  // console.log(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

$(".btn").click(function()
{
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});
function playSound(name)
{
  var audio = new Audio('sounds/' + randomChosenColour +'.mp3');
  audio.play();



}
function animatePress(currentColour)
{
  $("#" + currentColour).addClass("pressed");
  setTimeout(function (){
     $("#" + currentColour).removeClass("pressed");
    }, 100);

}








f
