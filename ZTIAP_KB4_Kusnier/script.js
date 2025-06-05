/**@type {HTMLCanvasElement} */
//spustenie a pauznutie hudby v hre

//koniec hudby v hre
var NumberOfKills = 0;
var RoundCounter = 1;

//gameloop

var frameCounter = 0;
function GameLoop() {
  if (!paused) {
    updateAll();
    drawAll();
    CheckGameOver();
    CheckAbleToShoot();
    frameCounter += 1;
  }

  if (!gameOver && !paused) {
    requestAnimationFrame(GameLoop);
  } else if (gameOver) {
    RestartGame();
  }
}
