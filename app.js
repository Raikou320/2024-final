import Player from './modules/player.js';
import Enemy from './modules/enemy.js';
import gameLoop from './modules/gameLoop.js';
import Life from './modules/life.js';
import rect from './modules/rect.js';
import Platform from './modules/platform.js';

export let scene = 'menu',
  keys = { left: false, right: false, up: false };

export const canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  setScene = function (newScene) {
    scene = newScene;
    keys = { left: false, right: false, up: false };
  },
  playerLv1 = new Player(
    50, //X
    350, //Y
    50, //Width
    50, //Height
    'red', //Color
    5, //Speed X
    -25, //Jump Power
    2, //Max Jumps
    0.5, //Gravity
    0, //Min X
    canvas.width - 50, //Max X
    0, //Min Y
    canvas.height - 50 //Ground
  ),
  enemyLv1 = new Enemy(
    250, //X
    375, //Y
    25, //Width
    25, //Height
    'blue', //Color
    5, //Speed X
    0, //Jump Power
    0, //Min X
    canvas.width - 50, //Max X
    0, //Min Y
    canvas.height - 50 //Ground
  ),
  platformsLv1 = [
    {
      x: 150,
      y: 350,
      width: 100,
      height: 30,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 400,
      y: 300,
      width: 50,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
  ],
  winPointLv1 = {
    x: 550,
    y: 190,
    width: 30,
    height: 30,
    color: 'green',
    draw: function () {
      rect(this.x, this.y, this.width, this.height, this.color);
    },
  },
  lifeLv1 = new Life(100, 100, 0, () => setScene('gameOver')),
  playerLv2 = new Player(
    50,
    550,
    50,
    50,
    'red',
    4.8,
    -22,
    2,
    0.55,
    0,
    canvas.width - 50,
    0,
    canvas.height - 50
  ),
  enemysLv2 = [
    new Enemy(
      200,
      400,
      30,
      30,
      'blue',
      -4,
      0,
      0,
      canvas.width - 30,
      0,
      canvas.height - 30
    ),
    new Enemy(
      555,
      400,
      35,
      35,
      'blue',
      6,
      0,
      0,
      canvas.width - 35,
      0,
      canvas.height - 35
    ),
  ],
  lifeLv2 = new Life(90, 80, 0, () => setScene('gameOver')),
  platformsLv2 = [
    {
      x: 100,
      y: 520,
      width: 80,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 370,
      y: 440,
      width: 40,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 500,
      y: 430,
      width: 120,
      height: 25,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 725,
      y: 360,
      width: 60,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 825,
      y: 270,
      width: 30,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
  ],
  winPointLv2 = {
    x: 860,
    y: 150,
    width: 20,
    height: 20,
    color: 'green',
    draw: function () {
      rect(this.x, this.y, this.width, this.height, this.color);
    },
  },
  playerLv3 = new Player(
    50,
    750,
    50,
    50,
    'red',
    4.5,
    -20,
    2,
    0.6,
    0,
    canvas.width - 50,
    0,
    750
  ),
  enemysLv3 = [
    new Enemy(
      250,
      500,
      45,
      45,
      'blue',
      8,
      0,
      0,
      canvas.width - 45,
      0,
      canvas.height - 45
    ),
    new Enemy(
      500,
      450,
      50,
      50,
      'blue',
      9,
      0,
      0,
      canvas.width - 50,
      0,
      canvas.height - 50
    ),
    new Enemy(
      900,
      400,
      55,
      55,
      'blue',
      -12,
      0,
      0,
      canvas.width - 55,
      0,
      canvas.height - 55
    ),
  ],
  platformsLv3 = [
    {
      x: 50,
      y: 735,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 150,
      y: 685,
      width: 30,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 220,
      y: 615,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 335,
      y: 555,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 520,
      y: 505,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 650,
      y: 445,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 650,
      y: 325,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 750,
      y: 385,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 950,
      y: 375,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 920,
      y: 305,
      width: 40,
      height: 20,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 850,
      y: 255,
      width: 15,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
    {
      x: 1060,
      y: 185,
      width: 10,
      height: 15,
      color: '#633000',
      draw: function () {
        rect(this.x, this.y, this.width, this.height, this.color);
      },
    },
  ],
  lifeLv3 = new Life(80, 65, 0, () => setScene('gameOver')),
  winPointLv3 = {
    x: 1150,
    y: 50,
    width: 20,
    height: 20,
    color: 'green',
    draw: function () {
      rect(this.x, this.y, this.width, this.height, this.color);
    },
  },
  worldWidthLv4 = 2000,
  worldHeightLv4 = 1500,
  playerLv4 = new Player(
    0,
    worldHeightLv4 - 50,
    50,
    50,
    'red',
    4.2,
    -18,
    2,
    0.65,
    0,
    worldWidthLv4 - 50,
    0,
    worldHeightLv4 - 50
  ),
  enemysLv4 = [
    new Enemy(
      200,
      450,
      60,
      60,
      'blue',
      -14,
      0,
      0,
      worldWidthLv4 - 60,
      0,
      worldHeightLv4 - 60
    ),
    new Enemy(
      900,
      550,
      65,
      65,
      'blue',
      15,
      0,
      0,
      worldWidthLv4 - 65,
      0,
      worldHeightLv4 - 65
    ),
    new Enemy(
      1250,
      650,
      70,
      70,
      'blue',
      -18,
      0,
      0,
      worldWidthLv4 - 70,
      0,
      worldHeightLv4 - 70
    ),
    new Enemy(
      100,
      worldHeightLv4 - 70,
      75,
      75,
      'blue',
      20,
      0,
      0,
      worldWidthLv4 - 75,
      0,
      worldHeightLv4 - 75
    ),
  ],
  lifeLv4 = new Life(70, 35, 0, () => setScene('gameOver')),
  platformsLv4 = [
    new Platform(0, worldHeightLv4 - 50, 100, 30),
    new Platform(150, worldHeightLv4 - 120, 30, 15),
    new Platform(250, worldHeightLv4 - 200, 50, 25),
    new Platform(400, worldHeightLv4 - 250, 300, 20),
    new Platform(700, worldHeightLv4 - 315, 100, 15),
    new Platform(750, worldHeightLv4 - 385, 50, 35),
    new Platform(850, worldHeightLv4 - 450, 50, 20),
    new Platform(725, worldHeightLv4 - 495, 100, 20),
    new Platform(555, worldHeightLv4 - 505, 20, 15),
    new Platform(655, worldHeightLv4 - 575, 20, 15),
    new Platform(755, worldHeightLv4 - 635, 150, 20),
    new Platform(900, worldHeightLv4 - 500, 100, 20),
    new Platform(975, worldHeightLv4 - 555, 50, 25),
    new Platform(935, worldHeightLv4 - 625, 50, 20),
    new Platform(975, worldHeightLv4 - 705, 50, 20),
    new Platform(1025, worldHeightLv4 - 755, 50, 20),
    new Platform(1075, worldHeightLv4 - 805, 50, 20),
    new Platform(1155, worldHeightLv4 - 855, 60, 20),
    new Platform(1225, worldHeightLv4 - 905, 75, 20),
    new Platform(1350, worldHeightLv4 - 955, 155, 20),
    new Platform(1575, worldHeightLv4 - 1025, 50, 20),
    new Platform(1755, worldHeightLv4 - 1105, 150, 55),
    new Platform(1855, worldHeightLv4 - 1175, 55, 25),
    new Platform(1900, worldHeightLv4 - 1225, 50, 25),
    new Platform(1950, worldHeightLv4 - 1290, 45, 15),
    new Platform(1875, worldHeightLv4 - 1350, 50, 20),
  ],
  winPointLv4 = {
    x: worldWidthLv4 - 30,
    y: 30,
    width: 30,
    height: 30,
    color: 'green',
    draw: function () {
      rect(
        this.x - cameraLv4.x,
        this.y - cameraLv4.y,
        this.width,
        this.height,
        this.color
      );
    },
  },
  cameraLv4 = {
    x: playerLv4.x - canvas.width / 2,
    y: playerLv4.y - canvas.width / 2,
  },
  updateCameraLv4 = function () {
    cameraLv4.x = playerLv4.x - canvas.width / 2;
    cameraLv4.y = playerLv4.y - canvas.height / 2;
    cameraLv4.x = Math.max(
      0,
      Math.min(cameraLv4.x, worldWidthLv4 - canvas.width)
    );
    cameraLv4.y = Math.max(
      0,
      Math.min(cameraLv4.y, worldHeightLv4 - canvas.height)
    );
  },
  drawMiniMapLv4 = function () {
    const mapWidth = 200;
    const mapHeight = 150;
    const scaleX = mapWidth / worldWidthLv4;
    const scaleY = mapHeight / worldHeightLv4;
    rect(10, 50, mapWidth, mapHeight, 'rgba(0, 0, 0, 0.5)');
    rect(
      10 + playerLv4.x * scaleX,
      50 + playerLv4.y * scaleY,
      playerLv4.width * scaleX,
      playerLv4.height * scaleY,
      'red'
    );
    ctx.strokeStyle = 'white';
    ctx.strokeRect(
      10 + cameraLv4.x * scaleX,
      50 + cameraLv4.y * scaleY,
      canvas.width * scaleX,
      canvas.height * scaleY
    );
    platformsLv4.forEach((platform) => {
      rect(
        10 + platform.x * scaleX,
        50 + platform.y * scaleY,
        platform.width * scaleX,
        platform.height * scaleY,
        platform.color
      );
    });
    enemysLv4.forEach((enemy) => {
      rect(
        10 + enemy.x * scaleX,
        50 + enemy.y * scaleY,
        enemy.width * scaleX,
        enemy.height * scaleY,
        enemy.color
      );
    });
    rect(
      10 + winPointLv4.x * scaleX,
      50 + winPointLv4.y * scaleY,
      winPointLv4.width * scaleX,
      winPointLv4.height * scaleY,
      'green'
    );
  },
  worldWidthLv5 = 3000,
  worldHeightLv5 = 2000,
  playerLv5 = new Player(
    0,
    worldHeightLv5 - 50,
    50,
    50,
    'red',
    4,
    -16,
    2,
    0.7,
    0,
    worldWidthLv5 - 50,
    0,
    worldHeightLv5 - 50
  ),
  enemysLv5 = [
    new Enemy(
      200,
      450,
      60,
      60,
      'blue',
      -14,
      0,
      0,
      worldWidthLv5 - 60,
      0,
      worldHeightLv5 - 60
    ),
    new Enemy(
      400,
      450,
      60,
      60,
      'blue',
      14,
      0,
      0,
      worldWidthLv5 - 60,
      0,
      worldHeightLv5 - 60
    ),
    new Enemy(
      600,
      450,
      60,
      60,
      'blue',
      -16,
      0,
      0,
      worldWidthLv5 - 60,
      0,
      worldHeightLv5 - 60
    ),
    new Enemy(
      800,
      450,
      60,
      60,
      'blue',
      16,
      0,
      0,
      worldWidthLv5 - 60,
      0,
      worldHeightLv5 - 60
    ),
    new Enemy(
      1000,
      worldHeightLv5 - 60,
      60,
      60,
      'blue',
      18,
      0,
      0,
      worldWidthLv5 - 60,
      0,
      worldHeightLv5 - 60
    ),
  ],
  lifeLv5 = new Life(60, 20, 0, () => setScene('gameOver')),
  platformsLv5 = [
    new Platform(0, worldHeightLv5 - 50, 100, 30),
    new Platform(150, worldHeightLv5 - 110, 30, 15),
    new Platform(250, worldHeightLv5 - 160, 15, 20),
    new Platform(150, worldHeightLv5 - 210, 30, 15),
    new Platform(250, worldHeightLv5 - 260, 15, 20),
    new Platform(150, worldHeightLv5 - 310, 30, 15),
    new Platform(250, worldHeightLv5 - 360, 15, 20),
    new Platform(150, worldHeightLv5 - 410, 30, 15),
    new Platform(250, worldHeightLv5 - 460, 15, 20),
    new Platform(150, worldHeightLv5 - 510, 30, 15),
    new Platform(250, worldHeightLv5 - 560, 15, 20),
    new Platform(150, worldHeightLv5 - 610, 30, 15),
    new Platform(250, worldHeightLv5 - 660, 15, 20),
    new Platform(150, worldHeightLv5 - 710, 30, 15),
    new Platform(250, worldHeightLv5 - 760, 15, 20),
    new Platform(150, worldHeightLv5 - 810, 30, 15),
    new Platform(250, worldHeightLv5 - 860, 15, 20),
    new Platform(150, worldHeightLv5 - 910, 30, 15),
    new Platform(250, worldHeightLv5 - 960, 15, 20),
    new Platform(150, worldHeightLv5 - 1010, 30, 15),
    new Platform(250, worldHeightLv5 - 1060, 15, 20),
    new Platform(150, worldHeightLv5 - 1110, 30, 15),
    new Platform(250, worldHeightLv5 - 1160, 15, 20),
    new Platform(150, worldHeightLv5 - 1210, 30, 15),
    new Platform(250, worldHeightLv5 - 1260, 15, 20),
    new Platform(150, worldHeightLv5 - 1310, 30, 15),
    new Platform(250, worldHeightLv5 - 1360, 15, 20),
    new Platform(150, worldHeightLv5 - 1410, 30, 15),
    new Platform(250, worldHeightLv5 - 1460, 15, 20),
    new Platform(150, worldHeightLv5 - 1510, 30, 15),
    new Platform(250, worldHeightLv5 - 1560, 15, 20),
    new Platform(150, worldHeightLv5 - 1610, 30, 15),
    new Platform(250, worldHeightLv5 - 1660, 15, 20),
    new Platform(350, worldHeightLv5 - 260, 30, 15),
    new Platform(450, worldHeightLv5 - 310, 15, 20),
    new Platform(550, worldHeightLv5 - 320, 30, 15),
    new Platform(650, worldHeightLv5 - 330, 15, 20),
    new Platform(750, worldHeightLv5 - 340, 30, 15),
    new Platform(850, worldHeightLv5 - 350, 15, 20),
    new Platform(950, worldHeightLv5 - 360, 30, 15),
    new Platform(1050, worldHeightLv5 - 370, 15, 20),
    new Platform(1150, worldHeightLv5 - 380, 30, 15),
    new Platform(1250, worldHeightLv5 - 390, 15, 20),
    new Platform(1350, worldHeightLv5 - 400, 30, 15),
    new Platform(1450, worldHeightLv5 - 410, 15, 20),
    new Platform(1550, worldHeightLv5 - 420, 30, 15),
    new Platform(1650, worldHeightLv5 - 450, 15, 20),
    new Platform(1750, worldHeightLv5 - 490, 30, 15),
    new Platform(1850, worldHeightLv5 - 535, 15, 20),
    new Platform(1950, worldHeightLv5 - 550, 30, 15),
    new Platform(2050, worldHeightLv5 - 560, 15, 20),
    new Platform(2150, worldHeightLv5 - 600, 20, 15),
    new Platform(2150, worldHeightLv5 - 650, 20, 15),
    new Platform(2150, worldHeightLv5 - 700, 20, 15),
    new Platform(2150, worldHeightLv5 - 750, 20, 15),
    new Platform(2150, worldHeightLv5 - 800, 20, 15),
    new Platform(2150, worldHeightLv5 - 850, 20, 15),
    new Platform(2150, worldHeightLv5 - 900, 20, 15),
    new Platform(2150, worldHeightLv5 - 950, 20, 15),
    new Platform(2150, worldHeightLv5 - 1000, 20, 15),
    new Platform(2150, worldHeightLv5 - 1050, 20, 15),
    new Platform(2150, worldHeightLv5 - 1100, 20, 15),
    new Platform(2300, worldHeightLv5 - 1125, 50, 35),
    new Platform(2325, worldHeightLv5 - 1175, 50, 35),
    new Platform(2350, worldHeightLv5 - 1225, 50, 35),
    new Platform(2375, worldHeightLv5 - 1275, 50, 35),
    new Platform(2400, worldHeightLv5 - 1325, 50, 35),
    new Platform(2425, worldHeightLv5 - 1375, 50, 35),
    new Platform(2450, worldHeightLv5 - 1425, 50, 35),
    new Platform(2475, worldHeightLv5 - 1475, 50, 35),
    new Platform(2725, worldHeightLv5 - 1525, 50, 35),
    new Platform(2800, worldHeightLv5 - 1585, 75, 25),
    new Platform(2700, worldHeightLv5 - 1635, 50, 20),
    new Platform(2850, worldHeightLv5 - 1685, 50, 20),
    new Platform(2950, worldHeightLv5 - 1755, 50, 75),
    new Platform(2900, worldHeightLv5 - 1805, 30, 35),
    new Platform(2975, worldHeightLv5 - 1875, 25, 25),
  ],
  cameraLv5 = {
    x: playerLv5.x - canvas.width / 2,
    y: playerLv5.y - canvas.width / 2,
  },
  winPointLv5 = {
    x: worldWidthLv5 - 50,
    y: 10,
    width: 40,
    height: 40,
    color: '#3b3b3b',
    draw: function () {
      rect(
        this.x - cameraLv5.x,
        this.y - cameraLv5.y,
        this.width,
        this.height,
        this.color
      );
    },
  },
  updateCameraLv5 = function () {
    cameraLv5.x = Math.max(
      0,
      Math.min(worldWidthLv5 - canvas.width, playerLv5.x - canvas.width / 2)
    );
    cameraLv5.y = Math.max(
      0,
      Math.min(worldHeightLv5 - canvas.height, playerLv5.y - canvas.height / 2)
    );
  },
  keyLv5 = {
    isTaken: false,
    x: 200,
    y: worldHeightLv5 - 1750,
    width: 20,
    height: 35,
    color: 'yellow',
    draw: function () {
      rect(
        this.x - cameraLv5.x,
        this.y - cameraLv5.y,
        this.width,
        this.height,
        this.color
      );
    },
  },
  drawMiniMapLv5 = function () {
    const mapWidth = 200;
    const mapHeight = 150;
    const scaleX = mapWidth / worldWidthLv5;
    const scaleY = mapHeight / worldHeightLv5;
    rect(10, 50, mapWidth, mapHeight, 'rgba(0, 0, 0, 0.5)');
    rect(
      10 + playerLv5.x * scaleX,
      50 + playerLv5.y * scaleY,
      playerLv5.width * scaleX,
      playerLv5.height * scaleY,
      'red'
    );
    ctx.strokeStyle = 'white';
    ctx.strokeRect(
      10 + cameraLv5.x * scaleX,
      50 + cameraLv5.y * scaleY,
      canvas.width * scaleX,
      canvas.height * scaleY
    );
    platformsLv5.forEach((platform) => {
      rect(
        10 + platform.x * scaleX,
        50 + platform.y * scaleY,
        platform.width * scaleX,
        platform.height * scaleY,
        platform.color
      );
    });
    enemysLv5.forEach((enemy) => {
      rect(
        10 + enemy.x * scaleX,
        50 + enemy.y * scaleY,
        enemy.width * scaleX,
        enemy.height * scaleY,
        enemy.color
      );
    });
    rect(
      10 + winPointLv5.x * scaleX,
      50 + winPointLv5.y * scaleY,
      winPointLv5.width * scaleX,
      winPointLv5.height * scaleY,
      winPointLv5.color
    );
    rect(
      10 + keyLv5.x * scaleX,
      50 + keyLv5.y * scaleY,
      keyLv5.width * scaleX,
      keyLv5.height * scaleY,
      keyLv5.color
    );
  };

gameLoop();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && scene === 'menu') {
    scene = 'lv1';
    enemyLv1.resetStats();
    enemysLv2.forEach((enemy) => enemy.resetStats());
    enemysLv3.forEach((enemy) => enemy.resetStats());
    enemysLv4.forEach((enemy) => enemy.resetStats());
    enemysLv5.forEach((enemy) => enemy.resetStats());
    playerLv1.resetStats();
    playerLv2.resetStats();
    playerLv3.resetStats();
    playerLv4.resetStats();
    playerLv5.resetStats();
    lifeLv1.reset();
    lifeLv2.reset();
    lifeLv3.reset();
    lifeLv4.reset();
    lifeLv5.reset();
  }
  if (
    scene === 'lv1' ||
    scene === 'lv2' ||
    scene === 'lv3' ||
    scene === 'lv4' ||
    scene === 'lv5'
  ) {
    if (e.key.toLowerCase() === 'q' || e.key === 'ArrowLeft') {
      keys.left = true;
    }
    if (e.key.toLowerCase() === 'd' || e.key === 'ArrowRight') {
      keys.right = true;
    }
    if (e.key.toLowerCase() === 'z' || e.key === 'ArrowUp' || e.key === ' ') {
      keys.up = true;
    }
  } else if (scene === 'gameOver' && e.key === 'Enter') scene = 'menu';
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'q') keys.left = false;
  if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') keys.right = false;
  if (e.key === 'ArrowUp' || e.key === ' ' || e.key.toLowerCase() === 'z') {
    keys.up = false;
  }
});