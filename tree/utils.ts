
import TreeNode from "./TreeNode"

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