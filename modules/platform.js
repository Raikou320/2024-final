import { scene, cameraLv4, cameraLv5 } from '../app.js';
import rect from './rect.js';

export default class Platform {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = '#633000';
  }

  draw() {
    rect(
      scene === 'lv4' ?
      this.x - cameraLv4.x :
      scene === 'lv5' ?
      this.x - cameraLv5.x :
      this.x,
      scene === 'lv4' ?
      this.y - cameraLv4.y :
      scene === 'lv5' ?
      this.y - cameraLv5.y :
      this.y,
      this.width,
      this.height,
      this.color
    );
  }
}
