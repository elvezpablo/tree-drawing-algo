import * as React from 'react';
import './style.css';
import data from './data';

import {
  buildTree,
  calculateInitialValues,
  applyModifier,
  updateXVals,
} from './tree/utils';
import CharacterNode from './components/CharacterNode';
import TreeMap from './components/TreeMap';
import { TreeNode } from './tree/TreeNode';
import ControlPanel from './components/ControlPanel';

export default function App() {
  const [tree, setTree] = React.useState<TreeNode[]>([]);

  React.useEffect(() => {
    let root = buildTree(data[0], 0, undefined, undefined);
    let nodes: TreeNode[] = [root];
    const flatTree: TreeNode[] = [];
    while (nodes.length) {
      let node = nodes.shift();
      nodes = [...nodes, ...node.children];
      flatTree.push(node);
    }
    setTree(flatTree);
    // calculateInitialValues(root) ;
    // applyModifier(root, 0);
    // updateXVals(root);
  }, []);

  const handleChange = (change: string, value?: number) => {
    console.log('change: ', change);
  };

  return (
    <div>
      <TreeMap nodes={tree} />
      <ControlPanel onChange={handleChange} />
      {/* <h2>Data Structure</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
