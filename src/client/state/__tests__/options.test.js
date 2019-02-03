import options, { isAllowed } from '../options';
import { redirect } from 'redux-first-router';

const routeWithRole = 'routeWithRole';
const routeWithoutRole = 'routeWithoutRole';

jest.mock('redux-first-router');
jest.mock('routes', () => ({
  routesMap: {
    routeWithRole: {
      role: 'role'
    },
    routeWithoutRole: {}
  }
}));

describe('state/options', () => {
  describe('isAllowed', () => {
    it('should allow the user if no role attached to route', () => {
      const result = isAllowed(routeWithoutRole);

      expect(result).toEqual(true);
    });

    it('should reject user if server', () => {
      const result = isAllowed(routeWithRole);

      expect(result).toEqual(false);
    });

    it('should allow user if not server and user has role', () => {
      const user = { roles: ['role'] };
      const result = isAllowed(routeWithRole, user);

      global.window = 'something';

      expect(result).toEqual(true);
    });

    it('should reject user if not server and user doesnt have role', () => {
      const user = { roles: ['nope'] };
      const result = isAllowed(routeWithRole, user);

      global.window = 'something';
      
      expect(result).toEqual(false);
    });
  });
  
  describe('onBeforeChange', () => {
    it('should do nothing if allowed', () => {
      const dispatch = jest.fn();
      const getState = jest.fn();

      options.onBeforeChange(dispatch, getState, { action: { type: routeWithoutRole } });

      expect(redirect).toHaveBeenCalledTimes(0);
      expect(dispatch).toHaveBeenCalledTimes(0);
    });

    it('should redirect if not allowed', () => {
      const dispatch = jest.fn();
      const getState = jest.fn();

      options.onBeforeChange(dispatch, getState, { action: { type: routeWithRole } });

      expect(redirect).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});