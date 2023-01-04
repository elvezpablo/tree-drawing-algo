import * as React from 'react';
import './style.css';
import data from './data';
import { buildTree } from './tree/utils';

export default function App() {
  React.useEffect(() => {
    // let root = buildTree(data, null, null, 0);
  });

  return (
    <div>
      <h1>Algorithm for Drawing Tidy Trees</h1>
      <p>
        <a href="https://reingold.co/tidier-drawings.pdf" target="_blank">
          Reingold-Tilford Algorithm
        </a>{' '}
        for Optimized Tree Drawing from{' '}
        <a
          href="https://rachel53461.wordpress.com/2014/04/20/algorithm-for-drawing-trees/"
          target="_blank"
        >
          Racheal Lims Blog
        </a>
      </p>

      {/* <h2>Data Structure</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
