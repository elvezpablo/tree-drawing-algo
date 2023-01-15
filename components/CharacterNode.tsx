import * as React from 'react';

const NodeSize = {
  width: 60,
  height: 20,
};

export { NodeSize };

const CharacterNode = ({ x = 0, y = 0 }: { x?: number; y?: number }) => (
  <rect
    height={NodeSize.height}
    width={NodeSize.width}
    x={x}
    y={y}
    fill="rgb(99,99,99, .3"
    stroke="rgb(200,200,200, .3)"
  />
);

export default CharacterNode;
