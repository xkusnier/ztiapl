var zombiesArray = [];
class Zombie {
  constructor() {
    this.WasSmoked = 0;
    this.AbleToKill = 1;
    this.RandomSmoke = Math.floor(Math.random() * (900 - 600 + 1)) + 600;
    this.teleportN = Math.floor(Math.random() * (60 - 50 + 1)) + 50;
    this.shieldFrame = Math.floor(Math.random() * (120 - 80 + 1)) + 80;
    this.jump = 3;
    this.hp = 2;
    this.numberOfUpdatedPosition = 0;
    this.x = Math.floor(Math.random() * (600 - 300 + 1)) + 300 - 100;
    this.y = Math.floor(Math.random() * (600 - 470 + 1)) + 470;
    this.width = 100;
    this.height = 150;
    this.speed = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    this.image = new Image();
    this.image.src = "img/zombie.png";
    this.audioDeath = new Audio();
    this.audioDeath.src = "music/ZombieDeath.mp3";
  }
  UpdatePosition() {
    this.x += this.speed;
    this.numberOfUpdatedPosition += 1;
    if (this.numberOfUpdatedPosition % 77 == 0) {
      this.image.src = "img/stojaciZombie.png";
    } else if (this.numberOfUpdatedPosition % 101 == 0) {
      this.image.src = "img/zombie.png";
    }
  }
  Draw() {
    ctx.font = "30px Arial";
    ctx.fillText(this.hp, this.x + this.width / 2 - 10, this.y - 55);
    ctx.drawImage(
      this.image,
      this.x - 125,
      this.y - 100,
      this.width + 250,
      this.height + 200
    );
  }
}

class JumpZombie extends Zombie {
  UpdatePosition() {
    this.x += this.speed;
    this.y += this.jump;
    if (this.y > 600) {
      this.jump = -3;
    }
    if (this.y < 470) {
      this.jump = 3;
    }
  }
}

class TeleportZombie extends Zombie {
  UpdatePosition() {
    this.x += this.speed;
    this.numberOfUpdatedPosition += 1;
    if (this.numberOfUpdatedPosition == this.teleportN) {
      this.numberOfUpdatedPosition = 0;
      this.x += Math.random() < 0.5 ? 200 : -200;
      if (this.x < 0) {
        this.x += 300;
      }
    }
  }
}

class ShieldZombie extends Zombie {
  UpdatePosition() {
    this.x += this.speed;
    this.numberOfUpdatedPosition += 1;
    if (this.numberOfUpdatedPosition > this.shieldFrame) {
      this.image.src = "img/shield.png";
      this.AbleToKill = 0;
    }
    if (this.numberOfUpdatedPosition > this.shieldFrame + 100) {
      this.image.src = "img/zombie.png";
      this.AbleToKill = 1;
    }
  }
}

class SmokeZombie extends Zombie {
  UpdatePosition() {
    this.x += this.speed;
    this.numberOfUpdatedPosition += 1;
    if (this.x > this.RandomSmoke && this.WasSmoked == 0) {
      this.WasSmoked = 1;
      smokeX = this.x - 200;
      smokeY = this.y - 400;
      SmokesArray.push(new smoke());
    }
  }
}
