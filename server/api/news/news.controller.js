'use strict'

import news from './news.db';
import utils from '../../utils/utils';

/**
 * Route: GET '/api/factProject/all'
 */
export const getAll = (req, res) => {
    news.getAll()
    .then((newsItem) => res.status(200).json(newsItem))
    .catch((err) => utils.handleError(res, err));
}

export const createNews = (req, res) => {
    let _news = req.body;
    news.create(_news)
    .then((newsItem) => res.status(200).json(newsItem))
    .catch((err) => utils.handleError(res, err));
}

export const updateNews = (req, res) => {
    let {id} = req.params;
    let _news = req.body;
    console.log(_news);
    news.update(id, _news)
    .then((newsItem) => res.status(200).json(newsItem))
    .catch((err) => utils.handleError(res, err));
}

export default {
    all: getAll,
    create: createNews,
    update: updateNews,
}