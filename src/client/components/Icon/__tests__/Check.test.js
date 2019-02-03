import * as React from 'react';
import { Check } from '../Check';

describe('components/Icon/Check', () => {
  describe('render', () => {
    it('should render without error', () => {
      const result = shallow(<Check />);

      expect(result).toMatchSnapshot('Check');
    });
  });
});
