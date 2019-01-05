
import 'styles/main.scss';
import './App.scss';
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocationType } from 'state/selectors';
import { hot } from 'react-hot-loader';
import {
  Home
} from 'routes';
import {
  Switcher
} from 'components';

const App = ({ locationType }) => (
  <div className={`${locationType} app-container`}>
    <div className='content-container'>
      <Switcher
        routes={{
          HOME: Home
        }}
      />
    </div>
  </div>
);

App.propTypes = {
  locationType: PropTypes.string
};

const mapStateToProps = state => ({
  locationType: getLocationType(state)
});

export default hot(module)(connect(mapStateToProps)(App));