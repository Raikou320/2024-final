import { ctx } from '../app.js';
import rect from './rect.js';

export default function los(x, y, width, height, radians, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(radians);
  rect(-width / 2, -height / 2, width, height, color);
  ctx.restore();
}