'use strict'

import Promise from 'bluebird';
import sql from 'seriate';

export function getAll() {
    return new Promise((resolve, reject) => {
        sql.execute({
            query: sql.fromFile('./sql/news.getAll.sql')
        })
        .then((news) => {
            resolve(news);
        })
        .catch(reject);
    })
}

export default {
    getAll: getAll,
}