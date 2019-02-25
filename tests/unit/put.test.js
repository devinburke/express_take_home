import put from '../../src/routes/musicians/put';
import musicianScheme from '../../src/musician_schema';
import { ValidationError } from 'yup';
import cache from 'memory-cache';

jest.mock('../../src/musician_schema');
jest.mock('memory-cache');

const req = { params: { id: 'test' } };

it('should call next with error if validate throws an error', () => {
  const next = jest.fn();

  musicianScheme.validate.mockImplementation(() =>  { throw new ValidationError('test')});
  
  put(req, '_test', next);
  expect(next).toBeCalledWith({ status: 422, message: 'test'});
});

describe('#valid', () => {
  const musician = { test: 'test' };

  beforeEach(() => 
  {
    req.body = musician;

    musicianScheme.validate.mockImplementation(() =>  { return true });
  });

  it('should call put on cache with the id and request body', async () => {
    await put(req, { send: () => {} }, '_test');

    expect(cache.put).toBeCalledWith('test', JSON.stringify(musician));
  });

  it('should call send on response with the id', async () => {
    let send = jest.fn();

    await put(req, { send: send }, '_test');

    expect(send).toBeCalledWith({ id: 'test' });
  });
}); 
