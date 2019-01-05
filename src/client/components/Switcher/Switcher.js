
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocationType } from 'state/selectors';

export const Switch = ({ routes, locationType }) => {
  const Component = routes[locationType];
  return <Component />;
};

Switch.propTypes = {
  routes: PropTypes.object.isRequired,
  locationType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  locationType: getLocationType(state)
});

export default connect(mapStateToProps)(Switch);
