import {
  playerLv1,
  enemyLv1,
  lifeLv1,
  platformsLv1,
  winPointLv1,
  canvas,
} from '../app.js';
import text from './text.js';
import clear from './clear.js';
import rect from './rect.js';

export default function drawLevel1() {
  clear();
  rect(0, 0, canvas.width, canvas.height, 'lightblue');
  rect(0, 0, Math.round(lifeLv1.actualLife), 20, 'white');
  text(
    `${Math.round(lifeLv1.actualLife)}/${Math.round(lifeLv1.max)}`,
    10,
    20,
    lifeLv1.color,
    '20px Arial'
  );
  playerLv1.draw();
  enemyLv1.draw();
  platformsLv1.forEach((platform) => platform.draw());
  lifeLv1.changeColor();
  winPointLv1.draw();
}
