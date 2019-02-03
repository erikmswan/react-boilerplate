import * as React from 'react';
import { X } from '../X';

describe('components/Icon/X', () => {
  describe('render', () => {
    it('should render without error', () => {
      const result = shallow(<X />);

      expect(result).toMatchSnapshot('X');
    });
  });
});
