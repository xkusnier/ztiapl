function SpawnWave1() {
  customCursor = new rifle();
  for (let i = 0; i < 1; i++) {
    zombiesArray.push(new Zombie());
  }
  zombiesArray.forEach((zombie) => {
    zombie.speed = 2;
    zombie.hp = 1;
  });
}

function SpawnWave2() {
  for (let i = 0; i < 1; i++) {
    zombiesArray.push(new JumpZombie());
    zombiesArray.push(new ShieldZombie());
  }
  zombiesArray.forEach((zombie) => {
    zombie.speed = 2;
    zombie.hp = 2;
  });
}
function SpawnWave3() {
  // 3 slow
  customCursor = new sniper();
  zombiesArray.push(new JumpZombie());
  zombiesArray.push(new ShieldZombie());
  zombiesArray.push(new SmokeZombie());
  zombiesArray.forEach((zombie) => {
    zombie.speed = 1;
    zombie.hp = Math.floor(Math.random() * 2) + 1;
  });
}

function SpawnWave4() {
  customCursor = new shotgun();
  zombiesArray.push(new JumpZombie());
  zombiesArray.push(new SmokeZombie());
  zombiesArray.push(new Zombie());
  zombiesArray.forEach((zombie) => {
    zombie.speed = Math.floor(Math.random() * 2) + 1;
    zombie.hp = Math.floor(Math.random() * 2) + 1;
  });
}

function SpawnWave5() {
  customCursor = new rifle();
  zombiesArray.push(new ShieldZombie());
  zombiesArray.push(new SmokeZombie());
  zombiesArray.push(new JumpZombie());
  zombiesArray.forEach((zombie) => {
    zombie.speed = Math.floor(Math.random() * 2) + 1;
    zombie.hp = Math.floor(Math.random() * 3) + 2;
  });
}

function SpawnWave6() {
  customCursor = new shotgun();
  zombiesArray.push(new JumpZombie());
  zombiesArray.push(new JumpZombie());
  zombiesArray.push(new ShieldZombie());
  zombiesArray.push(new SmokeZombie());
  zombiesArray.push(new TeleportZombie());
  zombiesArray.forEach((zombie) => {
    zombie.speed = Math.floor(Math.random() * 2) + 1;
    zombie.hp = Math.floor(Math.random() * 4) + 1;
    if (zombie instanceof TeleportZombie) {
      zombie.hp = 2;
      zombie.speed = 1;
    }
  });
}

function SpawnWave7() {
  //5 fast
  customCursor = new shotgun();
  zombiesArray.push(new JumpZombie());
  zombiesArray.push(new JumpZombie());
  zombiesArray.push(new SmokeZombie());
  zombiesArray.push(new ShieldZombie());
  zombiesArray.push(new ShieldZombie());
  zombiesArray.forEach((zombie) => {
    zombie.speed = Math.floor(Math.random() * 3) + 1;
    zombie.hp = Math.floor(Math.random() * 4) + 1;
  });
}

function SpawnWave8() {
  customCursor = new rifle();
  for (let i = 0; i < 2; i++) {
    zombiesArray.push(new TeleportZombie());
  }
  zombiesArray.forEach((zombie) => {
    zombie.speed = Math.floor(Math.random() * 3) + 2;
    zombie.hp = Math.floor(Math.random() * 1) + 1;
  });
}

function SpawnWave9() {
  customCursor = new knife();
  zombiesArray.push(new TeleportZombie());
  zombiesArray.forEach((zombie) => {
    zombie.speed = 7;
  });
}
