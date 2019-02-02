import './Home.scss';
import * as React from "react";
import { hot } from "react-hot-loader";

export const Home = () => (
  <div className='home-container'>
    <h1 className='title'>Hello World!</h1>
  </div>
);

export default hot(module)(Home);
