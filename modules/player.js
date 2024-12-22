import rect from './rect.js';
import los from './los.js';
import { cameraLv4, cameraLv5, scene } from '../app.js';

export default class Player {
  constructor(
    x,
    y,
    width,
    height,
    color,
    xPower,
    jumpPower,
    maxJumps,
    gravity,
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
    this.sx = 0;
    this.sy = 0;
    this.xPower = xPower;
    this.jumpPower = jumpPower;
    this.maxJumps = maxJumps;
    this.jumpCount = 0;
    this.gravity = gravity;
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.ground = ground;
    this.canJump = true;
    this.isJumping = false;
    this.stockedX = x;
    this.stockedY = y;
    this.stockedWidth = width;
    this.stockedHeight = height;
    this.stockedSx = 0;
    this.stockedSy = 0;
    this.stockedXPower = xPower;
    this.stockedJumpPower = jumpPower;
    this.stockedMaxJumps = maxJumps;
    this.stockedJumpCount = 0;
    this.stockedGravity = gravity;
    this.stockedMinX = minX;
    this.stockedMaxX = maxX;
    this.stockedMinY = minY;
    this.stockedGround = ground;
    this.angle = 0;
    this.radians = (this.angle * Math.PI) / 180;
  }
  applyPhysics() {
    this.sx *= 0.9;
    this.sy *= 0.7;
    this.x += this.sx;
    this.y += this.sy;
    this.y += this.gravity;
    if (this.y >= this.ground) this.jumpCount = 0;
    this.y = Math.max(0, Math.min(this.ground, this.y));
    this.x = Math.max(0, Math.min(this.maxX, this.x));
    requestAnimationFrame(() => this.applyPhysics);
  }
  draw() {
    this.isJumping
      ? los(
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
          this.radians,
          this.color
        )
      : rect(
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
  move(left, right, up) {
    left ? (this.sx = -this.xPower) : right ? (this.sx = this.xPower) : null;
    if (up && this.jumpCount < this.maxJumps && this.canJump) {
      this.sy = this.jumpPower;
      this.jumpCount++;
      this.canJump = false;
      this.isJumping = true;
      this.angle < 45 ? (this.angle += 1) : null;
      this.radians = (this.angle * Math.PI) / 180;
      setTimeout(() => {
        this.canJump = true;
        setTimeout(() => (this.isJumping = false), 500);
      }, 300);
    }
  }
  setLimits(minX, maxX, minY, ground) {
    this.maxX = maxX;
    this.minX = minX;
    this.minY = minY;
    this.ground = ground;
    this.stockedMaxX = maxX;
    this.stockedMinX = minX;
    this.stockedMinY = minY;
    this.stockedGround = ground;
  }
  resetStats(
    x = true,
    y = true,
    width = true,
    height = true,
    xPower = true,
    jumpPower = true,
    maxJumps = true,
    gravity = true,
    minX = true,
    maxX = true,
    minY = true,
    ground = true
  ) {
    if (x) this.x = this.stockedX;
    if (y) this.y = this.stockedGround;
    if (width) this.width = this.stockedWidth;
    if (height) this.height = this.stockedHeight;
    if (xPower) this.xPower = this.stockedXPower;
    if (jumpPower) this.jumpPower = this.stockedJumpPower;
    if (maxJumps) this.maxJumps = this.stockedMaxJumps;
    if (gravity) this.gravity = this.stockedGravity;
    if (minX) this.minX = this.stockedMinX;
    if (maxX) this.maxX = this.stockedMaxX;
    if (minY) this.minY = this.stockedMinY;
    if (ground) this.ground = this.stockedGround;
  }
}
