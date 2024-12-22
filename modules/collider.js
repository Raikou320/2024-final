export default class Collider {
  constructor(obj1, obj2, callback) {
    this.obj1 = obj1;
    this.obj2 = obj2;
    this.callback = callback;
  }
  collide(mode, direction = 'all', callback = this.callback) {
    this.callback = () => callback();
    if (mode === 'rect') {
      if (direction === 'all') {
        if (
          this.obj1.x < this.obj2.x + this.obj2.width &&
          this.obj1.x + this.obj1.width > this.obj2.x &&
          this.obj1.y < this.obj2.y + this.obj2.height &&
          this.obj1.y + this.obj1.height > this.obj2.y
        ) {
          this.callback();
        }
      } else if (direction === 'high') {
        const tolerance = -5;
        if (
          this.obj1.y + this.obj1.height + tolerance > this.obj2.y &&
          this.obj1.y + this.obj1.height - tolerance <
            this.obj2.y + this.obj2.height &&
          this.obj1.x + tolerance < this.obj2.x + this.obj2.width &&
          this.obj1.x + this.obj1.width - tolerance > this.obj2.x
        ) {
          this.callback();
        }
      }
    }
  }
  changeObjs(obj1, obj2) {
    this.obj1 = obj1;
    this.obj2 = obj2;
  }
}
