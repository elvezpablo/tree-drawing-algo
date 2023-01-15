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

export default function App() {
  const [tree, setTree] = React.useState<TreeNode | undefined>();

  React.useEffect(() => {
    let root = buildTree(data[0], 0, undefined, undefined);
    setTree(root);
    // calculateInitialValues(root);
    // applyModifier(root, 0);
    // updateXVals(root);
    // console.log(root);
  });

  return (
    <div>
      <TreeMap nodes={tree} />
      {/* <h2>Data Structure</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
