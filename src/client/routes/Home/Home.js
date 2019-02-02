import * as React from 'react';
import { Welcome } from 'components';
import { hot } from 'react-hot-loader';

export const Home = () => (
  <div className='home-container'>
    <Welcome />
  </div>
);

export default hot(module)(Home);
