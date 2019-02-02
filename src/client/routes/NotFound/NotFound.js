import './NotFound.scss';
import * as React from 'react';
import { hot } from 'react-hot-loader';

export const NotFound = () => (
  <div className='not-found-container'>
    <h1 className='title'>404</h1>
    <p>Page not found.</p>
  </div>
);

export default hot(module)(NotFound);
