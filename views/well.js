'use strict'

const docstore = require('../lib/docstore')

module.exports = (function () {
  return {

    /**
    * @swagger
    *
    * /input:
    *   post:
    *     description: Login to the application
    *     consumes:
    *       - text/plain
    *     produces:
    *       - text/plain
    *     parameters:
    *       - name: key
    *         description: Arbitrary `key` to input
    *         in: body
    *         required: true
    *         type: string
    *     responses:
    *       200:
    *         description: Success
    *       500:
    *         description: Unexpected error
    */
    '/input': {
      post: function inputKey (req, res, next) {
        const key = req.body
        res.send(200, docstore.setKey(key))
        return next()
      }
    },

    /**
    * @swagger
    *
    * /query:
    *   get:
    *     description: Login to the application
    *     produces:
    *       - text/plain
    *     parameters:
    *       - name: key
    *         description: Arbitrary `key` to query
    *         in: query
    *         required: true
    *         type: string
    *     responses:
    *       200:
    *         description: Number of occurences of `key`
    *       500:
    *         description: Unexpected error
    */
    '/query': {
      get: function queryKey (req, res, next) {
        const key = req.query.key
        res.header('Content-Type', 'text/plain')
        res.send(200, docstore.getKey(key))
        return next()
      }
    }

  }
})()
