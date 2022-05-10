// Drawing variables
let canvas;
let ctx;
let width;
let height;

// Create input variables
let upKey;
let rightKey;
let downKey;
let leftKey;

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
  setupInputs();

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

function setupInputs() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = true;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      downKey = true;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = true;
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = false;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      downKey = false;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = false;
    }
  });
}
