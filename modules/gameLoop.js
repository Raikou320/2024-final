import {
  canvas,
  setScene,
  keys,
  playerLv1,
  enemyLv1,
  lifeLv1,
  platformsLv1,
  winPointLv1,
  playerLv2,
  enemysLv2,
  lifeLv2,
  platformsLv2,
  winPointLv2,
  playerLv3,
  enemysLv3,
  lifeLv3,
  platformsLv3,
  winPointLv3,
  playerLv4,
  enemysLv4,
  lifeLv4,
  platformsLv4,
  winPointLv4,
  worldWidthLv4,
  worldHeightLv4,
  updateCameraLv4,
  drawMiniMapLv4,
  playerLv5,
  enemysLv5,
  lifeLv5,
  platformsLv5,
  winPointLv5,
  worldWidthLv5,
  worldHeightLv5,
  updateCameraLv5,
  drawMiniMapLv5,
  keyLv5,
  scene,
} from '../app.js';
import Collider from './collider.js';
import drawMenu from './menu.js';
import drawLevel1 from './lv1.js';
import drawLevel2 from './lv2.js';
import drawLevel3 from './lv3.js';
import drawLevel4 from './lv4.js';
import drawLevel5 from './lv5.js';
import drawGameOver from './gameOver.js';
let previousScene = null;

export default function gameLoop() {
  if (scene !== previousScene) {
    if (scene === 'menu') {
      canvas.width = 300;
      canvas.height = 300;
    } else if (scene === 'lv1') {
      canvas.width = 600;
      canvas.height = 400;
    } else if (scene === 'lv2') {
      canvas.width = 900;
      canvas.height = 600;
    } else if (scene === 'lv3') {
      canvas.width = 1200;
      canvas.height = 800;
    } else if (scene === 'lv4' || scene === 'lv5') {
      canvas.width = 1200;
      canvas.height = 800;
    } else if (scene === 'gameOver') {
      canvas.width = 300;
      canvas.height = 300;
    }
    previousScene = scene;
  }
  if (scene === 'menu') {
    drawMenu();
  } else if (scene === 'lv1') {
    const colliderLv1 = new Collider(playerLv1, enemyLv1, () =>
      lifeLv1.takeDamages(1)
    );
    enemyLv1.setLimits(
      0,
      canvas.width - enemyLv1.width,
      0,
      canvas.height - enemyLv1.height
    );
    playerLv1.setLimits(
      0,
      canvas.width - playerLv1.width,
      0,
      canvas.height - playerLv1.height
    );
    drawLevel1();
    enemyLv1.move(true, false);
    playerLv1.applyPhysics();
    playerLv1.move(keys.left, keys.right, keys.up);
    colliderLv1.collide('rect');
    colliderLv1.collide('rect', 'high', () => enemyLv1.destroy());
    colliderLv1.changeObjs(playerLv1, winPointLv1);
    colliderLv1.collide('rect', 'all', () => setScene('lv2'));
    platformsLv1.forEach((platform) => {
      colliderLv1.changeObjs(playerLv1, platform);
      colliderLv1.collide('rect', 'high', () => {
        playerLv1.y = platform.y - playerLv1.height;
        playerLv1.jumpCount = 0;
      });
      colliderLv1.changeObjs(enemyLv1, platform);
      colliderLv1.collide('rect', 'all', () => (enemyLv1.sx *= -1));
    });
  } else if (scene === 'lv2') {
    const colliderLv2 = new Collider(null, null, null);
    drawLevel2();
    playerLv2.applyPhysics();
    playerLv2.move(keys.left, keys.right, keys.up);
    enemysLv2.forEach((enemy) => {
      enemy.move(true, false);
      colliderLv2.changeObjs(playerLv2, enemy);
      colliderLv2.collide('rect', 'high', () => enemy.destroy());
    });
    platformsLv2.forEach((platform) => {
      colliderLv2.changeObjs(playerLv2, platform);
      colliderLv2.collide('rect', 'high', () => {
        playerLv2.y = platform.y - playerLv2.height;
        playerLv2.jumpCount = 0;
      });
    });
    enemysLv2.forEach((enemy) => {
      colliderLv2.changeObjs(playerLv2, enemy);
      colliderLv2.collide('rect', 'all', () => lifeLv2.takeDamages(1.2));
      if (enemy.y <= enemy.ground && !enemy.isJumping) {
        enemy.y += 2.5;
      }
    });
    colliderLv2.changeObjs(playerLv2, winPointLv2);
    colliderLv2.collide('rect', 'all', () => setScene('lv3'));
  } else if (scene === 'lv3') {
    drawLevel3();
    const colliderLv3 = new Collider(null, null, null);
    playerLv3.applyPhysics();
    playerLv3.move(keys.left, keys.right, keys.up);
    playerLv3.setLimits(
      0,
      canvas.width - playerLv3.width,
      0,
      canvas.height - playerLv3.height
    );
    enemysLv3.forEach((enemy) => {
      enemy.move(true, false);
      enemy.setLimits(
        0,
        canvas.width - enemy.width,
        0,
        canvas.height - enemy.height
      );
      colliderLv3.changeObjs(playerLv3, enemy);
      colliderLv3.collide('rect', 'all', () => lifeLv3.takeDamages(1.44));
      colliderLv3.collide('rect', 'high', () => enemy.destroy());
      if (enemy.y <= enemy.ground && !enemy.isJumping) {
        enemy.y += 3;
      }
    });
    platformsLv3.forEach((platform) => {
      colliderLv3.changeObjs(playerLv3, platform);
      colliderLv3.collide('rect', 'high', () => {
        playerLv3.y = platform.y - playerLv3.height;
        playerLv3.jumpCount = 0;
      });
    });
    winPointLv3.draw();
    colliderLv3.changeObjs(playerLv3, winPointLv3);
    colliderLv3.collide('rect', 'all', () => setScene('lv4'));
  } else if (scene === 'lv4') {
    const colliderLv4 = new Collider(null, null, null);
    drawLevel4();
    updateCameraLv4();
    drawMiniMapLv4();
    playerLv4.setLimits(0, worldWidthLv4 - 50, 0, worldHeightLv4 - 50);
    playerLv4.applyPhysics();
    playerLv4.move(keys.left, keys.right, keys.up);
    enemysLv4.forEach((enemy) => {
      if (enemy.y < enemy.ground) {
        enemy.y += 3.5;
      }
      enemy.move(true, false);
      colliderLv4.changeObjs(playerLv4, enemy);
      colliderLv4.collide('rect', 'all', () => lifeLv4.takeDamages(1.728));
    });
    platformsLv4.forEach((platform) => {
      colliderLv4.changeObjs(playerLv4, platform);
      colliderLv4.collide('rect', 'high', () => {
        playerLv4.y = platform.y - playerLv4.height;
        playerLv4.jumpCount = 0;
      });
    });
    colliderLv4.changeObjs(playerLv4, winPointLv4);
    colliderLv4.collide('rect', 'all', () => setScene('lv5'));
  } else if (scene === 'lv5') {
    const colliderLv5 = new Collider(null, null, null);
    drawLevel5();
    updateCameraLv5();
    drawMiniMapLv5();
    playerLv5.setLimits(0, worldWidthLv5 - 50, 0, worldHeightLv5 - 50);
    playerLv5.applyPhysics();
    playerLv5.move(keys.left, keys.right, keys.up);
    enemysLv5.forEach((enemy) => {
      enemy.move(true, false);
      if (enemy.y < enemy.ground) {
        enemy.y += 4;
      }
      colliderLv5.changeObjs(playerLv5, enemy);
      colliderLv5.collide('rect', 'all', () => lifeLv5.takeDamages(2.0736));
    });
    platformsLv5.forEach((platform) => {
      colliderLv5.changeObjs(playerLv5, platform);
      colliderLv5.collide('rect', 'high', () => {
        playerLv5.y = platform.y - playerLv5.height;
        playerLv5.jumpCount = 0;
      });
    });
    if (keyLv5.isTaken) {
      keyLv5.color = 'rgba(0, 0, 0, 0)'
      winPointLv5.color = 'green';
      colliderLv5.changeObjs(playerLv5, winPointLv5);
      colliderLv5.collide('rect', 'all', () => setScene('menu'));
    } else {
      colliderLv5.changeObjs(playerLv5, keyLv5);
      colliderLv5.collide('rect', 'all', () => (keyLv5.isTaken = true));
    }
  } else if (scene === 'gameOver') {
    drawGameOver();
  }
  requestAnimationFrame(gameLoop);
}
