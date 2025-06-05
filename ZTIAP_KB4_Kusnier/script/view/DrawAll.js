function drawAll() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  gui.Draw();
  zombiesArray.forEach((zombie) => {
    zombie.Draw();
  });
  if (SmokesArray.length != 0) {
    SmokesArray.forEach((smoke) => {
      smoke.Draw();
    });
  }
  customCursor.draw();
}
