function RestartGame() {
  gameOver = false;
  WonGameTrueFalse = false;
  NumberOfKills = 0;
  frameCounter = 0;
  RoundCounter = 1;
  ShootAgain = 0;
  zombiesArray.forEach((zombie, index) => {
    zombiesArray.splice(index, zombiesArray.length);
  });
  SpawnWave1();
}
