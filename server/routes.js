'use strict'

import express from 'express';
import path from 'path';
import morgan from 'morgan';

const root = path.resolve();

/**
 * @param {Object} app Express instance
 * @param {Function} 
 */
export default (app, log) => {
    // Client side app
    app.use(express.static(root + '/bin'));

    // Logging, should be below static stuff to only log API calls, and not assets
    app.use(morgan('combined', { stream: log.stream }))

    /// Start inject routes ///
    app.use('/api/news/', require('./api/news').default);
    app.use('/api/news/all', require('./api/news').default);
    /// Stop inject routes ///

}