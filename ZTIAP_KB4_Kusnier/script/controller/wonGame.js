WonGameTrueFalse = false;

function WonGame() {
  WonGameTrueFalse = true;
  console.log("Game WON!");
  instructionsText.style.display = "none";
  navig.style.display = "none";
  MainMenuLink.style.display = "block";
  NadpisMenu.style.display = "block";
  gameovertext.style.display = "block";
  canvas.style.display = "none";
  document.body.style.backgroundImage = "url('img/screen2.png')";
  gameovertext.innerHTML += "Congratulations, you won !<br>";
  gameovertext.innerHTML += "<br>";
  gameovertext.innerHTML += "Zombies killed : ";
  gameovertext.innerHTML += NumberOfKills;
  gameovertext.innerHTML += "<br>Round : ";
  gameovertext.innerHTML += RoundCounter;
}
