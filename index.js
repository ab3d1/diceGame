// Generate random numbers for both dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Set the dice images based on the random numbers
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Update the first dice image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

// Update the second dice image
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Determine the winner or if it's a draw
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}