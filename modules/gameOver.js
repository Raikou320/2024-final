import rect from './rect.js';
import text from './text.js';
import { canvas } from '../app.js';

export default function drawGameOver() {
  rect(0, 0, canvas.width, canvas.height, 'brown');
  text(
    'Game Over',
    canvas.width / 2 - canvas.width / 4,
    canvas.height / 2 - canvas.height / 4,
    'black',
    '20px Arial'
  );
  text(
    'Appuyez sur Entrée pour recommencer',
    canvas.width / 2**1.5 - canvas.width / 4,
    canvas.height / 2 + canvas.height / 4,
    'black',
    '15px Arial'
  );
}
