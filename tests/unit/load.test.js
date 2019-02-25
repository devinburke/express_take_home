import load from '../../src/load';
import initialMusicians from '../../src/initial_musicians';
import cache from 'memory-cache';

jest.mock('memory-cache');

it('should call put on cache with each musicians key and value', () => {  
  load();

  for(let k in initialMusicians) expect(cache.put).toBeCalledWith(k, JSON.stringify(initialMusicians[k]));
});
