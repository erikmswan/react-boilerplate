import { redirect } from 'redux-first-router';
import { routesMap } from 'routes';

// these are some dummy authentication functions in case we want to do that at some point.

export const isServer = typeof window === 'undefined';

export const isAllowed = (type, state) => {
  const role = routesMap[type] && routesMap[type].role; // you can put arbitrary keys in routes
  if (!role) return true;

  const user = isServer
    ? null // server verify
    : state; // get user from state

  if (!user) return false;

  return user.roles.includes(role);
};

export default {
  onBeforeChange: (dispatch, getState, { action }) => {
    const allowed = isAllowed(action.type, getState());

    if (!allowed) {
      const action = redirect({ type: 'LOGIN' });
      dispatch(action);
    }
  },
  onAfterChange: (dispatch, getState) => {
    const { type } = getState().location;

    if (type === 'LOGIN' && !isServer) {
      alert('Failed to login.');
    }
  }
};
