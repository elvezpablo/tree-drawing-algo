import * as React from 'react';
import './style.css';
import data from './data.json';

export default function App() {
  return (
    <div>
      <h1>Algorithm for Drawing Trees</h1>
      <p>
        Reingold-Tilford Algorithm for Optimized Tree Drawing from{' '}
        <a
          href="https://rachel53461.wordpress.com/2014/04/20/algorithm-for-drawing-trees/"
          target="_blank"
        >
          Racheal Lims Blog
        </a>
      </p>
      <h2>Introduction </h2>
      <p>
        <ol>
          <li>
            Do{' '}
            <a
              href="https://www.javatpoint.com/postorder-traversal"
              target="_blank"
            >
              post-order traversal
            </a>{' '}
            of the tree data structure.
          </li>
          <li>
            Assign <em>X</em> value:
            <ul>
              <li>
                To <em>0</em> if it is left most node or left most sibling.
              </li>
              <li>
                To <em>X + 1</em> if it is not.
              </li>
            </ul>
          </li>
          <li>
            Center each parent node in the center of the children. Halfway
            between the first child and the last child.
            <ul>
              <li></li>
            </ul>
          </li>
        </ol>
      </p>
      {/* <h2>Data Structure</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
