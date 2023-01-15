import * as React from 'react';
import styled from 'styled-components';

const defaultValues = {
  width: 80,
  height: 26,
};

type Props = {
  value: string;
  x?: number;
  y?: number;
};

const Label = styled.text`
  fill: white;
  text-anchor: middle;
  font-size: .8rem;
  font-family: Bitter;
  font-weight: 100;
`;

const CharacterNode = ({ value, x = 0, y = 0 }: Props) => (
  <React.Fragment>
    <rect
      height={defaultValues.height}
      width={defaultValues.width}
      x={x}
      y={y}
      fill="rgb(99,99,99, .3"
      stroke="rgb(200,200,200)"
      strokeWidth=".3"
    />
    <Label x={x + defaultValues.width / 2} y={y + 17}>
      {value}
    </Label>
  </React.Fragment>
);

CharacterNode.defaultValues = defaultValues;

export default CharacterNode;
