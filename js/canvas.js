// Drawing variables
let canvas;
let ctx;
let width;
let height;

// Create game variables
let gameLoop;
let player;

// Runs once page has loaded
window.onload = function () {
  // Assign canvas and context variables
  canvas = document.getElementById("game-canvas");
  ctx = canvas.getContext("2d");

  width = canvas.width;
  height = canvas.height;

  // Setup key listeners

  // Create player
  player = new Player(10, 290);

  // Start game loop
  gameLoop = setInterval(step, 1000 / 30);
};

function step() {
  // Player step
  player.step();

  // Draw everything
  draw();
}

function draw() {
  // Clear canvas
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

  // Draw player
  player.draw();
}
