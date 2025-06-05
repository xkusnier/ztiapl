function CheckNewRound() {
  if (zombiesArray.length == 0 && RoundCounter == 1) {
    RoundCounter += 1;
    SpawnWave2();
  } else if (zombiesArray.length == 0 && RoundCounter == 2) {
    RoundCounter += 1;
    SpawnWave3();
  } else if (zombiesArray.length == 0 && RoundCounter == 3) {
    RoundCounter += 1;
    SpawnWave4();
  } else if (zombiesArray.length == 0 && RoundCounter == 4) {
    RoundCounter += 1;
    SpawnWave5();
  } else if (zombiesArray.length == 0 && RoundCounter == 5) {
    RoundCounter += 1;
    SpawnWave6();
  } else if (zombiesArray.length == 0 && RoundCounter == 6) {
    RoundCounter += 1;
    SpawnWave7();
  } else if (zombiesArray.length == 0 && RoundCounter == 7) {
    RoundCounter += 1;
    SpawnWave8();
  } else if (zombiesArray.length == 0 && RoundCounter == 8) {
    RoundCounter += 1;
    SpawnWave9();
  }
}
