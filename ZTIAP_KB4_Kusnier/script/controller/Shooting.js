var ShootAgain = 0;

const reloadSound = new Audio("music/reload.mp3");
document.addEventListener("keydown", function (event) {
  if (event.key === "r" || event.key === "R") {
    reload();
    reloadSound.play();
  }
});

function shot() {
  if (customCursor.cursorBullets != 0 && customCursor.AbleToShoot != 0) {
    customCursor.audio.play();
    ShootAgain = frameCounter + customCursor.delay;
    CheckCollision();
    customCursor.AbleToShoot = 0;
    customCursor.cursorBullets -= 1;
  } else if (customCursor.cursorBullets == 0) {
    customCursor.audio2.play();
  }
}

function CheckAbleToShoot() {
  if (frameCounter == ShootAgain) {
    customCursor.AbleToShoot = 1;
  }
}

function reload() {
  customCursor.cursorBullets = customCursor.MainCursorBullets;
}
