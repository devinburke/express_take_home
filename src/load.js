import initialMusicians from './initial_musicians';

const cache = require('memory-cache');

const loadMusicians = () => {
  for (let k in initialMusicians) {
    let musician = JSON.stringify(initialMusicians[k]);

    cache.put(k, musician);
  }
};

export default loadMusicians;
