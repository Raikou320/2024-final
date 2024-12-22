import { ctx } from '../app.js'

export default function text(text, x, y, color, font) {
    ctx.font = font
    ctx.fillStyle = color
    ctx.fillText(text, x, y)
}