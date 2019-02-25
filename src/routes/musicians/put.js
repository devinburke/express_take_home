import cache from 'memory-cache';
import musicianScheme from '../../musician_schema';

const put = async (req, res, next) => {
  try {
    const id = req.params['id'];

    await musicianScheme.validate(req.body);

    cache.put(id, JSON.stringify(req.body));

    res.send({ id: id });
  } catch (error) {
    next({ status: 422, message: error.errors[0] });
  }
};

export default put;
