'use strict'

import express from 'express';
import controller from './news.controller';

const router = express.Router();

router.get('/all', controller.all);

export default router;