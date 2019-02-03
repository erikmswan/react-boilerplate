import {
  getPlaceholder,
  postPlaceholder,
  putPlaceholder,
  deletePlaceholder
} from '../placeholder';

const serviceHosts = {
  serviceHost1: 'host'
};

describe('dao/placeholder', () => {
  let request;

  beforeEach(() => {
    request = jest.fn(arg => arg);
  });

  describe('getPlaceholder', () => {
    it('should return the correct dao object', () => {
      const result = getPlaceholder(
        {
          request,
          serviceHosts
        },
        10
      );

      expect(result).toMatchSnapshot('getPlaceholder');
    });
  });

  describe('putPlaceholder', () => {
    it('should return the correct dao object', () => {
      const result = putPlaceholder(
        {
          request,
          serviceHosts
        },
        'test'
      );

      expect(result).toMatchSnapshot('putPlaceholder');
    });
  });

  describe('postPlaceholder', () => {
    it('should return the correct dao object', () => {
      const result = postPlaceholder(
        {
          request,
          serviceHosts
        },
        'test'
      );

      expect(result).toMatchSnapshot('postPlaceholder');
    });
  });

  describe('deletePlaceholder', () => {
    it('should return the correct dao object', () => {
      const result = deletePlaceholder(
        {
          request,
          serviceHosts
        },
        'test'
      );

      expect(result).toMatchSnapshot('deletePlaceholder');
    });
  });
});
