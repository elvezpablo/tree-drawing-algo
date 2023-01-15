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
  React.useEffect(() => {
    let root = buildTree(data[0], 0, undefined, undefined);
    // calculateInitialValues(root);
    // applyModifier(root, 0);
    // updateXVals(root);
    // console.log(root);
  });

  return (
    <div>
      <TreeMap  />
      {/* <h2>Data Structure</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
