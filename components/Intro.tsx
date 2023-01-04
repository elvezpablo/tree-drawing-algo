import * as React from 'react';

export default function Intro() {
  return (
    <div>
      <h2>Introduction</h2>
      <p>Brief intro here.</p>
      <p>
        Wetherell and Shannon (<b>WS</b>) give three aesthetics in an attempt to
        define a "tidy" drawing of a binary tree.
        <ul>
          <li>
            Aesthetic 1: Nodes at the same level of the tree should lie along a
            straight line, and the straight lines defining the levels should be
            parallel.{' '}
          </li>
          <li>
            Aesthetic 2: A left child should be positioned to the left of its
            parent and a right child to the right.{' '}
          </li>
          <li>Aesthetic 3: A parent should be centered over its children.</li>
        </ul>
      </p>
    </div>
  );
}
