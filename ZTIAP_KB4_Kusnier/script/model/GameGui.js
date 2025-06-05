class GameGui {
  constructor() {
    this.x = 100;
    this.y = 100;
  }
  Draw() {
    ctx.font = "50px Arial";
    ctx.fillText("Ammo : " + customCursor.cursorBullets, this.x, this.y);
    ctx.fillText("Kills : " + NumberOfKills, this.x, this.y + 60);
    ctx.fillText("Round : " + RoundCounter, this.x, this.y + 120);
  }
}

const gui = new GameGui();
