import {
  playerLv5,
  enemysLv5,
  lifeLv5,
  platformsLv5,
  winPointLv5,
  worldWidthLv5,
  worldHeightLv5,
  keyLv5,
} from '../app.js';
import clear from './clear.js';
import rect from './rect.js';
import text from './text.js';

export default function drawLevel5() {
  clear();
  rect(0, 0, worldWidthLv5, worldHeightLv5, 'lightblue');
  platformsLv5.forEach((platform) => platform.draw());
  enemysLv5.forEach((enemy) => enemy.draw());
  playerLv5.draw();
  rect(0, 0, Math.round(lifeLv5.actualLife), 20, 'white');
  lifeLv5.changeColor();
  text(
    `${Math.round(lifeLv5.actualLife)}/${lifeLv5.max}`,
    20,
    20,
    lifeLv5.color,
    '20px Arial'
  );
  winPointLv5.draw();
  keyLv5.draw()
}