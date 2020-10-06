// <input type="button" value="Reload Page" onClick="document.location.reload(true)">
function getRandomNum() {
  var n = Math.random() * 6;
  return Math.floor(n) + 1;
}

var num1 = getRandomNum();
var num2 = getRandomNum();

var newSrc1 = "images/" + "dice" + num1 + ".png";
var newSrc2 = "images/" + "dice" + num2 + ".png";

var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];

// document.querySelector("img").setAttribute("src", newSrc);
dice1.setAttribute("src", newSrc1);
dice2.setAttribute("src", newSrc2);

if (num1 > num2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (num1 < num2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
