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
let borders = [];

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
  player = new Player(60, 200);

  // Create borders
  for (let i = 0; i < 6; i++) {
    borders.push(new Border(0 + 50 * i, 350, 50, 50, 1));
  }

  borders.push(new Border(0, 300, 50, 50, 2));
  for (let i = 0; i < 3; i++) {
    borders.push(new Border(300, 250 + 50 * i, 50, 50, 2));
  }

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

  // Draw borders
  for (let i = 0; i < borders.length; i++) {
    borders[i].draw();
  }
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

function checkIntersection(r1, r2) {
  if (r1.x >= r2.x + r2.width) {
    return false;
  } else if (r1.x + r1.width <= r2.x) {
    return false;
  } else if (r1.y >= r2.y + r2.height) {
    return false;
  } else if (r1.y + r1.height <= r2.y) {
    return false;
  } else {
    return true;
  }
}
