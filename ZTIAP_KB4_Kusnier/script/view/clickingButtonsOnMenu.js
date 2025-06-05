//koniec hudby v hre

//klik na instructions
var instructionsLink = document.getElementById("instructions");
var instructionsText = document.getElementById("instructions-text");

instructionsLink.addEventListener("click", function (event) {
  event.preventDefault();
  instructionsText.style.display = "block";
  navig.style.display = "none";
  MainMenuLink.style.display = "block";
  gamepause();
});
//koniec kliku na instructions

//klik na main menu
var MainMenuLink = document.getElementById("MainMenu");
var navig = document.getElementById("navig");

var container = document.querySelector(".container");

MainMenuLink.addEventListener("click", function (event) {
  event.preventDefault();
  navig.style.display = "block";
  NadpisMenu.style.display = "block";
  instructionsText.style.display = "none";
  MainMenuLink.style.display = "none";
  volumeSlider.style.display = "none";
  volumeSliderText.style.display = "none";
  gameovertext.style.display = "none";
  container.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.body.style.backgroundImage = "url('img/screen.png')";
  container.style.cursor = "crosshair";
  canvas.style.display = "none";
  gamepause();
});
//koniec kliku na main menu

//klik na play
var playLink = document.getElementById("play");
var instructionsText = document.getElementById("instructions-text");
var navig = document.getElementById("navig");
var NadpisMenu = document.getElementById("NadpisMenu");
var container = document.querySelector(".container");

playLink.addEventListener("click", function (event) {
  event.preventDefault();
  instructionsText.style.display = "none";
  navig.style.display = "none";
  NadpisMenu.style.display = "none";
  MainMenuLink.style.display = "block";
  container.style.backgroundColor = "rgba(0,0,0,0)";
  container.style.cursor = "none";
  canvas.style.display = "block";
  gameovertext.innerHTML = DeftextBeforeDeletion;
  gameOver = false;
  gamepause();
  RestartGame();
  GameLoop();
});
//klik na options

var optionsLink = document.getElementById("options");
optionsLink.addEventListener("click", function (event) {
  event.preventDefault();
  volumeSlider.style.display = "block";
  instructionsText.style.display = "none";
  navig.style.display = "none";
  MainMenuLink.style.display = "block";
  NadpisMenu.style.display = "block";
  volumeSliderText.style.display = "block";
  gamepause();
});

var gameovertext = document.getElementById("gameover-text");

const DeftextBeforeDeletion = gameovertext.innerHTML.substring(0, 26);
