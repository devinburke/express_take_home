import app from '../../src/app';
import request from 'supertest';
import cache from 'memory-cache';

it('should return an error when request body is not a valid musician', async () => {
  const response = await request(app).put('/musicians/test').send({});

  expect(response.statusCode).toBe(422);
  expect(response.body.errorMessage).toBe('genre is a required field');
});

it('should update and return musician id if musician is valid', async () => {
  const musician = { firstName: 'test', lastName: 'test', genre: 'ROCK' },
        newFirstName = 'test new name';

  cache.put('test', JSON.stringify(musician));

  musician.firstName = newFirstName;

  const response = await request(app).put('/musicians/test').send(musician);

  expect(response.statusCode).toBe(200);
  expect(response.body.id).toBe('test');

  let updatedMusician = JSON.parse(cache.get('test'));

  expect(updatedMusician.firstName).toBe(newFirstName);
  cache.clear();
});
