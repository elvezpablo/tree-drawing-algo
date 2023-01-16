import * as React from 'react';
import { TreeNode } from '../tree/TreeNode';
import CharacterNode from './CharacterNode';

type Props = {
  nodes: TreeNode[];
};

const size = {
  width: 800,
  height: 500,
};

export default function TreeMap({ nodes }: Props) {
  console.log('nodes: ', nodes);
  const rowHeight = CharacterNode.defaultValues.height + 10;
  return (
    <svg width={size.width} height={size.height}>
      <rect fill="rgb(33,33,33,.3)" width={size.width} height={size.height} />
      {nodes.map((n) => {
        return <CharacterNode value={n.value} x={10} y={n.y * rowHeight} />;
      })}
    </svg>
  );
}
