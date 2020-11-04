'use strict'

const bunyan = require('bunyan')
const config = require('config')

let LOGGER // bunyan rotating-file fails if instantiated more than once

function createLogger () {
  if (!LOGGER) {
    if (process.env.NODE_ENV === 'local' || !process.env.NODE_ENV) {
      if (config.logger.streams) {
        config.logger.streams.push({
          level: 'debug',
          stream: process.stdout
        })
      }
    }
    LOGGER = bunyan.createLogger(config.logger)
  }
  return LOGGER
}

module.exports = createLogger
