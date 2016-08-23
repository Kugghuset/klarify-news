'use strict'

import news from './news.db';
import utils from '../../utils/utils';

/**
 * Route: GET '/api/factProject/all'
 */
export const getAll = (req, res) => {
    news.getAll()
    .then((news) => res.status(200).json(news))
    .catch((err) => utils.handleError(res, err));
}

export default {
    all: getAll,
}