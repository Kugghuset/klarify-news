'use strict'

import _ from 'lodash';
import sql from 'seriate';
import Promise from 'bluebird';

export function getAll() {
    return new Promise((resolve, reject) => {
        sql.execute({
            query: sql.fromFile('./sql/news.getAll.sql')
        })
        .then((newsItem) => {
            resolve(newsItem);
        })
        .catch(reject);
    })
}

export function create(news) {
    return new Promise((resolve, reject) => {
        sql.execute({
            query: sql.fromFile('./sql/news.create.sql'),
            params: {
                news: {
                    type: sql.NVarChar,
                    val: news['Good News']
                },
                names: {
                    type: sql.NVarChar,
                    val: news['Name(s)']
                },
                date: {
                    type: sql.Date,
                    val: news['Date']
                }
            }
        })
        .then((newsItem) => resolve(newsItem[0]))
        .catch(reject)
    });
}

export function update(id, news) {
    return new Promise((resolve, reject) => {
        sql.execute({
            query: sql.fromFile('./sql/news.update.sql'),
            params: {
                id: {
                type: sql.BigInt,
                val: id,
                },
                news: {
                    type: sql.NVarChar,
                    val: news['Good News']
                },
                name: {
                    type: sql.NVarChar,
                    val: news['Name(s)']
                },
                date: {
                    type: sql.Date,
                    val: news['Date']
                },
                isdeleted: {
                    type: sql.Bit,
                    val: news['isDeleted']
                }
            }
        })
        .then((newsItem) => resolve("Record created: " + JSON.stringify(newsItem)))
        .catch(reject)
    });
}

export default {
    getAll: getAll,
    create: create,
    update: update,
}