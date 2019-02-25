import app from '../../src/app';
import request from 'supertest';
import cache from 'memory-cache';

it('should return an error for musicians not found', async () => {
  const response = await request(app).get('/musicians/test');

  expect(response.statusCode).toBe(404);
  expect(response.body.errorMessage).toBe('Musician does not exist');
});

it('should return a musician found in the cache', async () => {
  const musician = { test: 'test' };

  cache.put('test', JSON.stringify(musician));

  const response = await request(app).get('/musicians/test');

  musician.id = 'test'
  expect(response.statusCode).toBe(200);
  expect(response.body.id).toBe('test');
  expect(response.body.test).toBe('test');

  cache.clear();
});
