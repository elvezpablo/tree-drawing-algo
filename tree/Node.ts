

class Node {

  x: number;
  y: number;
  finalY: number;
  modifier:number;

  constructor(x, y, parent, prevSibling, dataNode) {
      this.x = x;
      this.y = y;
      this.finalY = 0;
      this.modifier = 0;

      this.parent = parent;
      this.prevSibling = prevSibling;
      this.children = [];

      this.dataNode = dataNode;
      this.collapse = false;
  }
}