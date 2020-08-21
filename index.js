//first dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1); //random number between 1 and 6
console.log(randomNumber1);
//concatenation
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
//setting attribute to change source to the random images
image1.setAttribute("src", randomImageSource);
//for the second dice
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//results
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Yaay player number One wins!!! 😃";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Yaay player number Two wins!!! 😄";
} else {
  document.querySelector("h1").innerHTML = "DRAW";
}
