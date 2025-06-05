function updateAll() {
  zombiesArray.forEach((zombie) => {
    zombie.UpdatePosition();
  });
  SmokesArray.forEach((smoke, index) => {
    smoke.numberOfUpdatedPosition += 1;
    if (smoke.numberOfUpdatedPosition > 150) {
      SmokesArray.splice(index, 1);
    }
  });
}
