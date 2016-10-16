'use strict'

import news from './news.db';
import utils from '../../utils/utils';
import winston from 'winston';

winston.add(winston.transports.File, { filename: 'logfile.log' });

/**
 * Route: GET '/api/factProject/all'
 */
export const getAll = (req, res) => {
    console.log(res.connection.remoteAddress);
    console.log(res.headers['x-forwarded-for']);
    winston.info('New IP!');
    winston.log('info', res.connection.remoteAddress);
    winston.log('info', res.headers['x-forwarded-for']);
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