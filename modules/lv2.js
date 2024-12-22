import {
  enemysLv2,
  platformsLv2,
  playerLv2,
  lifeLv2,
  winPointLv2,
  canvas,
} from '../app.js';
import clear from './clear.js';
import text from './text.js';
import rect from './rect.js';

export default function drawLevel2() {
  clear();
  rect(0, 0, canvas.width, canvas.height, 'lightblue');
  platformsLv2.forEach((platform) => platform.draw());
  enemysLv2.forEach((enemy) => enemy.draw());
  playerLv2.draw();
  rect(0, 0, Math.round(lifeLv2.actualLife), 20, 'white');
  text(
    `${Math.round(lifeLv2.actualLife)}/${lifeLv2.max}`,
    20,
    20,
    lifeLv2.color,
    '20px Arial'
  );
  lifeLv2.changeColor();
  winPointLv2.draw();
}