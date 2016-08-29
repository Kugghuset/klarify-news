'use strict'

import Promise from 'bluebird';
import utils from './utils.js';

// Get shorthands to utils.storage and utils.http
const {storage, http} = utils;

function getCurrentRemoteNews() {
    let _headers = {};
    return http.get('/api/news/all', {headers: _headers})
    .then((news) => {
        storage.set('allNews', news);
        return Promise.resolve(news);
    })
}

export default {
    getAllNews: getCurrentRemoteNews
}