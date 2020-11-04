'use strict'

const logger = require('../lib/logger')
const statusModule = require('../lib/status')

function status () {
  return {

    /**
    * @swagger
    *
    * /status:
    *   get:
    *     description: Status diagnostics page
    *     parameters:
    *       - name: format
    *         description: Display additional status format
    *         enum: ["full"]
    *         in: query
    *         required: false
    *         type: string
    *     responses:
    *       200:
    *         description: Status response
    *       500:
    *         description: Unexpected error
    */
    '/status': {
      get: (req, res, next) => {
        statusModule(req.query.format, function (error, statusData) {
          if (error) {
            logger.error(error)
            res.send(500, error)
            return next()
          }
          res.send(statusData)
          return next()
        })
      }
    }
  }
}

module.exports = status()
