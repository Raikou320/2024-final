import { canvas, ctx } from '../app.js';

export default function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}