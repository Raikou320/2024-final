import {
  playerLv3,
  enemysLv3,
  lifeLv3,
  platformsLv3,
  winPointLv3,
  canvas,
} from '../app.js';
import clear from './clear.js';
import rect from './rect.js';
import text from './text.js';

export default function drawLevel3() {
  clear();
  rect(0, 0, canvas.width, canvas.height, 'lightblue');
  enemysLv3.forEach((enemy) => enemy.draw());
  platformsLv3.forEach((platform) => platform.draw());
  playerLv3.draw();
  rect(0, 0, Math.round(lifeLv3.actualLife), 20, 'white');
  lifeLv3.changeColor();
  text(
    `${Math.round(lifeLv3.actualLife)}/${lifeLv3.max}`,
    20,
    20,
    lifeLv3.color,
    '20px Arial'
  );
  winPointLv3.draw();
}
