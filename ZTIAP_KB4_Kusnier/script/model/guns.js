class rifle {
  constructor() {
    this.damage = 1;
    this.AbleToShoot = 1;
    this.delay = 80;
    this.audio = new Audio("music/RifleShot.mp3");
    this.audio2 = new Audio("music/NoBullets.mp3");
    this.MainCursorBullets = 3;
    this.cursorBullets = 3;
    this.cursorImage = new Image();
    this.cursorImage.src = "img/crossRifle.png";
    this.CursorSize = 3;
    this.cursorWidth = 150 / this.CursorSize; // Width of the cursor image
    this.cursorHeight = 150 / this.CursorSize; // Height of the cursor image

    // Attach event listener to track mouse movement
    window.addEventListener("mousemove", (e) => {
      this.x = e.clientX - this.cursorWidth / 2;
      this.y = e.clientY - this.cursorHeight / 2;
    });
  }

  draw() {
    // Draw the cursor image at the current mouse position
    ctx.drawImage(
      this.cursorImage,
      this.x - 100 / this.CursorSize,
      this.y - 100 / this.CursorSize,
      this.cursorWidth + 100 / this.CursorSize,
      this.cursorHeight + 100 / this.CursorSize //50 + 200/3
    );
  }
  special() {
    this.cursorBullets = this.MainCursorBullets;
  }
}

class shotgun {
  constructor() {
    this.damage = 1;
    this.AbleToShoot = 1;
    this.delay = 60;
    this.audio = new Audio("music/ShotgunShot.mp3");
    this.audio2 = new Audio("music/NoBullets.mp3");
    this.MainCursorBullets = 5;
    this.cursorBullets = 5;
    this.cursorImage = new Image();
    this.cursorImage.src = "img/crossShotgun.png";
    this.CursorSize = 1;
    this.cursorWidth = 150 / this.CursorSize; // Width of the cursor image
    this.cursorHeight = 150 / this.CursorSize; // Height of the cursor image

    // Attach event listener to track mouse movement
    window.addEventListener("mousemove", (e) => {
      this.x = e.clientX - this.cursorWidth / 2;
      this.y = e.clientY - this.cursorHeight / 2;
    });
  }

  draw() {
    // Draw the cursor image at the current mouse position
    ctx.drawImage(
      this.cursorImage,
      this.x - 100 / this.CursorSize,
      this.y - 100 / this.CursorSize,
      this.cursorWidth + 100 / this.CursorSize,
      this.cursorHeight + 100 / this.CursorSize //50 + 200/3
    );
  }
  special() {
    if (this.cursorBullets == 1) {
      this.damage = 10;
    } else {
      this.damage = 1;
    }
  }
}

class sniper {
  constructor() {
    this.damage = 1;
    this.AbleToShoot = 1;
    this.delay = 240;
    this.audio = new Audio("music/SniperShot.mp3");
    this.audio2 = new Audio("music/NoBullets.mp3");
    this.MainCursorBullets = 2;
    this.cursorBullets = 2;
    this.cursorImage = new Image();
    this.cursorImage.src = "img/crossSniper.png";
    this.CursorSize = 4;
    this.cursorWidth = 150 / this.CursorSize; // Width of the cursor image
    this.cursorHeight = 150 / this.CursorSize; // Height of the cursor image

    // Attach event listener to track mouse movement
    window.addEventListener("mousemove", (e) => {
      this.x = e.clientX - this.cursorWidth / 2;
      this.y = e.clientY - this.cursorHeight / 2;
    });
  }

  draw() {
    // Draw the cursor image at the current mouse position
    ctx.drawImage(
      this.cursorImage,
      this.x - 100 / this.CursorSize,
      this.y - 100 / this.CursorSize,
      this.cursorWidth + 100 / this.CursorSize,
      this.cursorHeight + 100 / this.CursorSize //50 + 200/3
    );
  }
}

class knife {
  constructor() {
    this.damage = 10;
    this.AbleToShoot = 1;
    this.delay = 130;
    this.audio = new Audio("music/KnifeShot.mp3");
    this.audio2 = new Audio("music/NoBullets.mp3");
    this.MainCursorBullets = 0;
    this.cursorBullets = 2;
    this.cursorImage = new Image();
    this.cursorImage.src = "img/crossKnife.png";
    this.CursorSize = 7;
    this.cursorWidth = 150 / this.CursorSize; // Width of the cursor image
    this.cursorHeight = 150 / this.CursorSize; // Height of the cursor image

    // Attach event listener to track mouse movement
    window.addEventListener("mousemove", (e) => {
      this.x = e.clientX - this.cursorWidth / 2;
      this.y = e.clientY - this.cursorHeight / 2;
    });
  }

  draw() {
    // Draw the cursor image at the current mouse position
    ctx.drawImage(
      this.cursorImage,
      this.x - 100 / this.CursorSize,
      this.y - 100 / this.CursorSize,
      this.cursorWidth + 100 / this.CursorSize,
      this.cursorHeight + 100 / this.CursorSize //50 + 200/3
    );
  }
  special() {
    WonGame();
  }
}
