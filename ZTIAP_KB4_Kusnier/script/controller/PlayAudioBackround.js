function play() {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
    playbutton.value = "Pause music";
  } else {
    audio.pause();
    playbutton.value = "Play music";
  }
}
const audio = document.getElementById("audio");
const volumeSlider = document.getElementById("volumeSlider");
const volumeSliderText = document.getElementById("volumeSliderText");

audio.volume = volumeSlider.value;

volumeSlider.addEventListener("input", function () {
  audio.volume = volumeSlider.value;
});
