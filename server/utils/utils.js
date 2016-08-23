'use strict'

import _logger from './utils.logger';
export const logger = _logger;

/**
 * Logs something via the logging tool.
 *
 * @param {Any} message
 */
export const log = (message) => _logger.stream.write(message);

/**
 * Logs something as an error via the logging tool.
 *
 * @param {Any} message
 */
export const error = (message) => _logger.stream.writeError(message);

/**
 * Calls sends a response to the user of 500: Internal Error
 * and logs the actual error.
 *
 * @param {Object} res Express response object
 * @param {Error} err The error
 */
export const handleError = (res, err) => {
  log(err);
  if ((err || {}).stack) {
    log('\n');
    log(err.stack);
  }
  res.status(500).send('Internal error');
}

export default {
  logger: _logger,
  log: log,
  error: error,
  handleError: handleError
}