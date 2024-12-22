export default class Life {
  constructor(max, actualLife, min, callback) {
    this.max = max;
    this.stockedMax = max;
    this.actualLife = actualLife;
    this.stockedActualLife = actualLife;
    this.min = min;
    this.stockedMin = min;
    this.callback = callback;
    this.color = null;
  }
  takeDamages(damages) {
    this.actualLife -= damages;
  }
  changeColor() {
    if (this.actualLife < this.min) {
      this.callback();
    } else if (this.actualLife < this.max / 3) {
      this.color = 'red';
    } else if (this.actualLife < this.max / 2) {
      this.color = 'orange';
    } else if (this.actualLife > this.max / 2) {
      this.color = 'green';
    }
    if (this.actualLife < this.max - 0.1) this.actualLife += 0.1;
    requestAnimationFrame(() => this.changeColor);
  }
  reset(max = true, actual = true, min = true) {
    if (min) this.min = this.stockedMin;
    if (actual) this.actualLife = this.stockedActualLife;
    if (max) this.max = this.stockedMax;
  }
}
