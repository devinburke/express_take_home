import get from '../../src/routes/musicians/get';
import cache from 'memory-cache';

jest.mock('memory-cache');

const req = { params: { id: 'test' } };

it('should call next with error if a musician is not found in cache', () => {
  const next = jest.fn();
  
  cache.get.mockReturnValue(null);
  
  get(req, '_test', next);

  expect(next).toBeCalledWith({ status: 404, message: 'Musician does not exist'});
});

it('should return a found musician', () => {
  const send = jest.fn(),
        musician = { test: 'test' };

  cache.get.mockReturnValue(JSON.stringify(musician));

  get(req, { send: send });

  musician.id = req.params.id
  expect(send).toBeCalledWith(musician);
});
