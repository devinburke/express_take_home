import initialMusicians from '../../src/initial_musicians';
import cache from 'memory-cache';
import load from '../../src/load';

it('should load all musicians from initial_musicians into cache', () => {  
  load();

  for(let k in initialMusicians) expect(cache.get(k)).toBe(JSON.stringify(initialMusicians[k]));
});
