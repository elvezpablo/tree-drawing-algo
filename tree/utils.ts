import { TreeNode, DataNode } from './TreeNode';

const NODE_GAP = 3;

function buildTree(
  dataNode: DataNode,
  level: number,
  parent: TreeNode | undefined,
  prevSibling: TreeNode | undefined
) {
  let root: TreeNode = {
    x: 0,
    y: level,
    parent,
    prevSibling,
    value: dataNode.value,
    children: [],
  };
  for (let i = 0; i < dataNode.children.length; i++) {
    root.children.push(
      buildTree(
        dataNode.children[i],
        level + 1,
        root,
        i >= 1 ? root.children[i - 1] : null
      )
    );
  }
  return root;
}
// this should be node.x ??
function calculateInitialValues(node: TreeNode) {
  for (let i = 0; i < node.children.length; i++) {
    calculateInitialValues(node.children[i]);
  }
  // if the first child set X = 0
  if (!node.prevSibling) {
    node.x = 0;
    // else set X to previous child X + spacer
  } else {
    node.x = node.prevSibling.x + NODE_GAP;
  }
  // if the node has a single child set modifier to child location
  if (node.children.length == 1) {
    node.modifier = node.x;
    // if more than one child put node in the middle of the children
  } else if (node.children.length >= 2) {
    let minX = Infinity;
    let maxX = -minX;
    for (let i = 0; i < node.children.length; i++) {
      minX = Math.min(minX, node.children[i].x);
      maxX = Math.max(maxX, node.children[i].x);
    }
    // console.log('maxX: ', maxX, ' minX: ', minX);
    node.modifier = node.x - (maxX - minX) / 2;
  }
}

function applyModifier(node: TreeNode, modSum: number) {
  node.finalX = node.x + modSum;
  for (let i = 0; i < node.children.length; i++) {
    applyModifier(node.children[i], node.modifier + modSum);
  }
}

function updateXVals(root: TreeNode) {
  let minXVal = Infinity;
  let nodes = [root];
  // get the min X value
  while (nodes.length) {
    let node = nodes.shift();
    nodes = nodes.concat(node.children);
    if (node.finalX < minXVal) {
      minXVal = node.finalX;
    }
  }
  // adds the min X value to the finalX
  nodes = [root];
  while (nodes.length) {
    let node = nodes.shift();
    nodes = nodes.concat(node.children);
    node.finalX += Math.abs(minXVal);
  }
}

function fixNodeConflicts(root: TreeNode) {
  for (let i = 0; i < root.children.length; i++) {
    fixNodeConflicts(root.children[i]);
  }

  for (let i = 0; i < root.children.length - 1; i++) {
    // Get the left-most contour position of the current node
    let leftContour = getContour(root.children[i], -Infinity, Math.max);

    // Get the topmost contour position of the node underneath the current one
    let rightContour = getContour(root.children[i + 1], Infinity, Math.min);

    if (leftContour >= rightContour) {
      shiftX(root.children[i + 1], leftContour - rightContour + 3);
    }
  }
}

function getContour(
  root: TreeNode,
  val: number,
  func: (...values: number[]) => number
) {
  let nodes = [root];
  while (nodes.length) {
    let node = nodes.shift();
    nodes = nodes.concat(node.children);
    val = func(val, node.finalX);
  }
  return val;
}

function shiftX(root: TreeNode, shiftValue: number) {
  let nodes = [root];
  while (nodes.length) {
    let node = nodes.shift();
    nodes = nodes.concat(node.children);
    node.finalX += shiftValue;
  }
}

export {
  buildTree,
  calculateInitialValues,
  applyModifier,
  updateXVals,
  fixNodeConflicts,
};
