import text from './text.js';
import clear from './clear.js';

export default function drawMenu() {
  clear();
  text('Menu', 100, 50, 'red', '30px Arial');
  text('Pressez Entrée pour commencer', 20, 150, 'blue', '18px sans-serif');
}