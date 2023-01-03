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
      <h2>Introduction</h2>
      <p>Brief intro here.</p>
      <h2>Algorithm Outline</h2>
      <p>
        <ol>
          <li>
            1<sup>st</sup> traversal -
            <a
              href="https://www.javatpoint.com/postorder-traversal"
              target="_blank"
            >
              post-order traversal
            </a>{' '}
            of the tree data structure.
          </li>
          Assign <em>X</em> value:
          <h4>If it is left most node or left most sibling.</h4>
          <ul>
            <li>
              Assign X to <em>0</em>.
            </li>
          </ul>
          <h4>If the node has a sibling to the left.</h4>
          <ul>
            <li>
              Assign X to <em>X + 1</em>
            </li>
          </ul>
          <li>
            Center each parent node in the center of the children. Halfway
            between the first child and the last child.
            <h4>If the parent has no left sibling</h4>
            <ul>
              <li>
                Change it's <em>X</em> value to the center value.
              </li>
            </ul>
            <h4>If the parent has a left sibling</h4>
            <ul>
              <li>
                Store the <em>X</em> value in the <u>modifier</u> property{' '}
                <em>M</em>.{' '}
              </li>
            </ul>
            The <em>M</em> value is offset value used to center the the children
            under the parent node. It is calculated as{' '}
            <em>parent.x - middleOfChildren.x</em>.
          </li>
          <li>
            Loop through <em>Y</em> levels and check that the X coordinate of
            the right-most sibling does not overlap with X coordinate of the
            left-most sibling on the same level.
          </li>
          <li>
            2<sup>cnd</sup> traversal to determine all children are in the
            frame.
          </li>
          <li>
            3<sup>rd</sup> traversal to determine final X values.
          </li>
        </ol>
      </p>
      {/* <h2>Data Structure</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
