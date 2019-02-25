const cache = require('memory-cache');

const get = (req, res, next) => {
  const id = req.params['id'];
  const cachedMusician = cache.get(id);

  if (cachedMusician === null)
    return next({ status: 404, message: 'Musician does not exist' });

  let musician = JSON.parse(cache.get(id));

  musician['id'] = id;
  res.send(musician);
};

export default get;
