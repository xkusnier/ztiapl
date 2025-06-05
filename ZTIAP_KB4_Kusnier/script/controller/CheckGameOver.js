gameOver = false;
function CheckGameOver() {
  zombiesArray.forEach((zombie) => {
    if (zombie.x + zombie.width > CANVAS_WIDTH) {
      container.style.cursor = "crosshair";
      gameOver = true;
      console.log("Game over!");
      instructionsText.style.display = "none";
      navig.style.display = "none";
      MainMenuLink.style.display = "block";
      NadpisMenu.style.display = "block";
      gameovertext.style.display = "block";
      canvas.style.display = "none";
      document.body.style.backgroundImage = "url('img/screen2.png')";
      gameovertext.innerHTML += "You lost !<br>";
      gameovertext.innerHTML += "<br>";
      gameovertext.innerHTML += "Zombies killed : ";
      gameovertext.innerHTML += NumberOfKills;
      gameovertext.innerHTML += "<br>Round : ";
      gameovertext.innerHTML += RoundCounter;
      RestartGame();
    }
  });
}
