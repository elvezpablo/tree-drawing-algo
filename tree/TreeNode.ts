export default class TreeNode {
  x: number;
  y: number;
  finalY: number;
  modifier: number;

  parent: TreeNode | undefined;
  prevSibling: TreeNode | undefined;
  children: TreeNode[];
  value: string;
  collapse: boolean;

  constructor(x, y, parent, prevSibling, value) {
    this.x = x;
    this.y = y;
    this.finalY = 0;
    this.modifier = 0;

    this.parent = parent;
    this.prevSibling = prevSibling;
    this.children = [];

    this.value = value;
    this.collapse = false;
  }
}
