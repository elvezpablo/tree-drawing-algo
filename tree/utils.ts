import TreeNode from './TreeNode';

function buildTree(dataNode, parent, prevSibling, level) {
  let root = new TreeNode(level, 0, parent, prevSibling, dataNode);
  for (let i = 0; i < dataNode.children.length; i++) {
    root.children.push(
      buildTree(
        dataNode.children[i],
        root,
        i >= 1 ? root.children[i - 1] : null,
        level + 1
      )
    );
  }
  return root;
}

function calculateInitialValues(node) {
  for (let i = 0; i < node.children.length; i++) {
    calculateInitialValues(node.children[i]);
  }
  //
  if (node.prevSibling) {
    node.y = node.prevSibling.y + 3;
  } else {
    node.y = 0;
  }

  if (node.children.length == 1) {
    node.modifier = node.y;
  } else if (node.children.length >= 2) {
    let minY = Infinity;
    let maxY = -minY;
    for (let i = 0; i < node.children.length; i++) {
      minY = Math.min(minY, node.children[i].y);
      maxY = Math.max(maxY, node.children[i].y);
    }
    node.modifier = node.y - (maxY - minY) / 2;
  }
}

export { buildTree, calculateInitialValues };
