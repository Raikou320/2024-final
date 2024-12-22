import rect from './rect.js';
import { cameraLv4, cameraLv5, scene } from '../app.js';

export default class Enemy {
  constructor(
    x,
    y,
    width,
    height,
    color,
    sx,
    jumpPower,
    minX,
    maxX,
    minY,
    ground
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.sx = sx;
    this.jumpPower = jumpPower;
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.ground = ground;
    this.isJumping = false;
    this.isDead = false;
    this.stockedX = x;
    this.stockedY = y;
    this.stockedWidth = width;
    this.stockedHeight = height;
    this.stockedSx = sx;
    this.stockedJumpPower = jumpPower;
    this.stockedJumpCount = 0;
    this.stockedMinX = minX;
    this.stockedMaxX = maxX;
    this.stockedMinY = minY;
    this.stockedGround = ground;
  }
  draw() {
    if (!this.isDead) {
      rect(
        scene === 'lv4'
          ? this.x - cameraLv4.x
          : scene === 'lv5'
          ? this.x - cameraLv5.x
          : this.x,
        scene === 'lv4'
          ? this.y - cameraLv4.y
          : scene === 'lv5'
          ? this.y - cameraLv5.y
          : this.y,
        this.width,
        this.height,
        this.color
      );
    }
  }
  move(x, y) {
    if (this.x >= this.maxX || this.x <= this.minX) this.sx *= -1;
    if (x) this.x += this.sx;
    if (y && this.y > this.minY && this.y < this.ground) {
      this.jump();
    }
  }
  jump() {
    this.y += this.jumpPower;
  }
  setLimits(minX, maxX, minY, ground) {
    this.maxX = maxX;
    this.minX = minX;
    this.minY = minY;
    this.ground = ground;
  }
  destroy() {
    this.x = this.minX;
    this.y = this.minY;
    this.width = -1;
    this.height = -1;
    this.isDead = true;
  }
  resetStats(
    x = true,
    y = true,
    width = true,
    height = true,
    sx = true,
    jumpPower = true,
    minX = true,
    maxX = true,
    minY = true,
    ground = true,
    death = true
  ) {
    if (x) this.x = this.stockedX;
    if (y) this.y = this.stockedY;
    if (width) this.width = this.stockedWidth;
    if (height) this.height = this.stockedHeight;
    if (sx) this.sx = this.stockedSx;
    if (jumpPower) this.jumpPower = this.stockedJumpPower;
    if (minX) this.minX = this.stockedMinX;
    if (maxX) this.maxX = this.stockedMaxX;
    if (minY) this.minY = this.stockedMinY;
    if (ground) this.ground = this.stockedGround;
    if (death) this.isDead = false;
  }
}
