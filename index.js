var n = Math.random()
n = Math.floor(n*6)+1;

var randomImg = "dice" + n + ".png";

var imgSrc = "images/" + randomImg;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imgSrc);



var n2 = Math.random();

n2 = Math.floor(n2*6)+1;

var randomImg2 = "dice" + n2 + ".png";
var imgSrc2 = "images/" + randomImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imgSrc2);

if(n>n2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(n2>n){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else{
    document.querySelector("h1").innerHTML = "It's a Draw!"
}

