import express from 'express';
import get from './get';
import put from './put';

const router = express.Router();

router.get('/:id', get);
router.put('/:id', put);

export default router;
