var p1, p2;

p1 = Math.floor(Math.random() * 5) + 1;
p2 = Math.floor(Math.random() * 5) + 1;

var random1 = "dice" + p1 + ".png";
var randomsrc1 = "images/" + random1;

var random2 = "dice" + p2 + ".png";
var randomsrc2 = "images/" + random2;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomsrc1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomsrc2);

if(random1 > random2)
    {
        document.querySelector("h4").innerHTML ="🏁PLAYER 1 &nbsp; &nbsp; WON";
    }
else if(random2 > random1)
    {
        document.querySelector("h4").innerHTML ="🏁PLAYER 2 &nbsp; &nbsp; WON";
    }
else
    {
        document.querySelector("h4").innerHTML ="🏁DRAW🏁";
    }