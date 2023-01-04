export default class TreeNode {
  x: number;
  y: number;
  finalX: number;
  modifier: number;

  parent: TreeNode | undefined;
  prevSibling: TreeNode | undefined;
  children: TreeNode[];
  value: string;
  collapse: boolean;

  constructor(x, y, parent, prevSibling, value) {
    this.x = x;
    this.y = y;
    this.finalX = 0;
    this.modifier = 0;

    this.parent = parent;
    this.prevSibling = prevSibling;
    this.children = [];

    this.value = value;
    this.collapse = false;
  }
}
