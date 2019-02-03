import { Client as _Client } from '../client';
import axios from 'axios';

jest.mock('state', () => ({
  store: {
    getState: jest.fn()
  }
}));
jest.mock('axios');
jest.mock('state/selectors', () => ({
  getApiKey: () => 1
}));
axios.mockImplementation((...arg) => arg);

const Client = new _Client('test');

describe('client', () => {
  describe('class methods', () => {
    describe('request', () => {
      it('should fire a request', () => {
        expect(Client.request(Client.getPlaceholder())).toMatchSnapshot('request');
      });
    });

    describe('addAuthData', () => {
      it('should add auth data', () => {
        expect(Client.addAuthData(true)).toMatchSnapshot('addAuthData::true');
      });

      it('should not add auth data', () => {
        expect(Client.addAuthData(false)).toMatchSnapshot('addAuthData::false');
      });
    });

    describe('addApiKey', () => {
      it('should return the right object', () => {
        expect(Client.addApiKey()).toMatchSnapshot('addApiKey');
      });
    });
  });
});
