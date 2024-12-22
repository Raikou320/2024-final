import {
  playerLv4,
  enemysLv4,
  lifeLv4,
  platformsLv4,
  winPointLv4,
  worldWidthLv4,
  worldHeightLv4,
} from '../app.js';
import clear from './clear.js';
import rect from './rect.js';
import text from './text.js';

export default function drawLevel4() {
  clear();
  rect(0, 0, worldWidthLv4, worldHeightLv4, 'lightblue');
  platformsLv4.forEach((platform) => platform.draw());
  enemysLv4.forEach((enemy) => enemy.draw());
  playerLv4.draw();
  rect(0, 0, Math.round(lifeLv4.actualLife), 20, 'white');
  lifeLv4.changeColor();
  text(
    `${Math.round(lifeLv4.actualLife)}/${lifeLv4.max}`,
    20,
    20,
    lifeLv4.color,
    '20px Arial'
  );
  winPointLv4.draw();
}