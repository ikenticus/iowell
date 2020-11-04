'use strict'

const _ = require('lodash')
const fs = require('fs')
const logger = require('./lib/logger')()
const restify = require('restify')

function bindRoutes (handlers, api) {
  _.forEach(handlers, (routes, path) => {
    logger.info('Binding path:' + path)
    _.forEach(routes, (routeMethod, method) => {
      api[method]({ path: path, flags: 'i' }, routeMethod)
    })
  })
}

function createServer () {
  const server = restify.createServer()
  server.use(restify.plugins.acceptParser(server.acceptable))
  server.use(restify.plugins.queryParser({ mapParams: false }))
  server.use(restify.plugins.bodyParser())
  server.use(restify.plugins.requestLogger())

  server.on('uncaughtException', function (req, res, route, error) {
    logger.error(error)
    return res.send(500, error)
  })

  process.on('uncaughtException', function (error) {
    logger.error(error)
  })

  const views = []
  fs.readdirSync('./views').forEach(function loadView (viewFile) {
    logger.info('Loading route: ' + viewFile)
    views.push('./views/' + viewFile)
    bindRoutes(require('./views/' + viewFile), server)
  })

  const packageJson = require('./package.json')
  const swaggerServer = require('restify-swagger-jsdoc')
  swaggerServer.createSwaggerPage({
    title: packageJson.name,
    version: packageJson.version,
    server: server,
    path: '/help',
    apis: views
  })

  return server
}

const server = createServer(logger)
server.listen(process.env.APP_PORT || 9000)
