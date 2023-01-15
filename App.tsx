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

export default function App() {
  React.useEffect(() => {
    let root = buildTree(data[0], 0);
    calculateInitialValues(root);
    applyModifier(root, 0);
    updateXVals(root);
    console.log(root);
  });

  const size = {
    width: 800,
    height: 500,
  };

  return (
    <div>
      
      <div>
        <svg width={size.width} height={size.height}>
          <rect
            fill="rgb(33,33,33,.3)"
            width={size.width}
            height={size.height}
          />

          <CharacterNode value="0" x={10} y={10} />
        </svg>
      </div>
      {/* <h2>Data Structure</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
