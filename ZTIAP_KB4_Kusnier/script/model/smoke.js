var SmokesArray = [];
var smokeX = 800;
var smokeY = 500;
class smoke {
  constructor() {
    this.numberOfUpdatedPosition = 0;
    this.x = smokeX;
    this.y = smokeY;
    this.width = 800;
    this.height = 800;
    this.image = new Image();
    this.image.src = "img/smoke.png";
  }
  Draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
