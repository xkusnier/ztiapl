class ClickObserver {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(event) {
    shot();
  }
}

const observer = new ClickObserver(canvas);
