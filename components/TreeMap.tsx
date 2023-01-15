import * as React from 'react';
import TreeNode from '../tree/TreeNode';
import CharacterNode from './CharacterNode';

type Props = {
  nodes: TreeNode[]
}

const size = {
  width: 800,
  height: 500,
};

export default function TreeMap() {
  
        <svg width={size.width} height={size.height}>
          <rect
            fill="rgb(33,33,33,.3)"
            width={size.width}
            height={size.height}
          />

          <CharacterNode value="0" x={10} y={10} />
        </svg>
      
}