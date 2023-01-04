import TreeNode from './TreeNode';

const NODE_GAP = 3;

function buildTree(
  dataNode,
  level: number,
  parent?: TreeNode | undefined,
  prevSibling?: TreeNode | undefined
) {
  let root = new TreeNode(level, 0, parent, prevSibling, dataNode);
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

export { buildTree, calculateInitialValues, applyModifier };
