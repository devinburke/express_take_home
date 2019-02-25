import musicianSchema from '../../src/musician_schema';
import { ValidationError } from 'yup';

jest.mock('memory-cache');

let musician = {
  firstName: 'test',
  lastName: 'test',
  genre: 'ROCK'
};

it('should validate true for valid musicians', () => {  
  expect(() => musicianSchema.validateSync(musician)).not.toThrow();
});

function itValidatesPresence(attribute)
{
  it(`should throw a validation error when the ${attribute} is empty`, () => {
    musician[attribute] = '';

    expect(() => musicianSchema.validateSync(musician)).toThrowError(new ValidationError(`${attribute} is a required field`));
  });
}

function itValidatesLength(attribute, max)
{
  it(`should throw a validation error when ${attribute} is more than ${max}`, () => {
    musician[attribute] = 'a'.repeat(max + 1);

    expect(() => musicianSchema.validateSync(musician)).toThrowError(new ValidationError(`${attribute} must be at most ${max} characters`));
  });
}

describe('#firstName', () => {
  itValidatesPresence('firstName');
  itValidatesLength('firstName', 50);
});

describe('#lastName', () => {
  itValidatesPresence('lastName');
  itValidatesLength('lastName', 50);
});

it('should throw a validation error genre is not on of the allowed list', () => {
  musician.genre = '';

  expect(() => musicianSchema.validateSync(musician)).toThrowError(new ValidationError('genre must be one of the following values: JAZZ, BLUES, ROCK'));
});
