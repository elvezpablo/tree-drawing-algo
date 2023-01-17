import * as React from 'react';
import styled from 'styled-components';

type Props = {
  onChange: (change:string, value?: number) => void
};

const Container = styled.div`
  position: absolute;
  width: 10rem;
  top: 1rem;
  right: 1rem;
  border: 1px solid #ccc;
  padding: 0.25rem;

`;

export default function ControlPanel({onChange}:Props) {
  return (
    <Container>
      <h4>Controls</h4>
      <button onClick={() => onChange('initial')} >Initial</button>
    </Container>
  );
}
