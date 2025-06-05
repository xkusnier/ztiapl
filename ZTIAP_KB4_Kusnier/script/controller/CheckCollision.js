function CheckCollision() {
  zombiesArray.forEach((zombie, index) => {
    if (
      zombie.AbleToKill == 1 &&
      customCursor.cursorBullets != 0 &&
      customCursor.AbleToShoot != 0
    ) {
      if (
        zombie.x < customCursor.x + customCursor.cursorWidth &&
        zombie.x + zombie.width > customCursor.x &&
        zombie.y < customCursor.y + customCursor.cursorHeight &&
        zombie.y + zombie.height > customCursor.y
      ) {
        if (customCursor instanceof shotgun || customCursor instanceof knife) {
          customCursor.special();
        }
        zombie.hp -= customCursor.damage;
        if (zombie.hp <= 0) {
          if (customCursor instanceof rifle) {
            customCursor.special();
          }
          zombie.audioDeath.play();
          zombie.speed = 0;
          zombie.image.src = "img/death.png";
          NumberOfKills += 1;
          zombiesArray.splice(index, 1);
          CheckNewRound();
        }
      }
    }
  });
}
