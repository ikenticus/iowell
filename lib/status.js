'use strict'

const moment = require('moment-timezone')
const packageJson = require('../package.json')

module.exports = function serviceStatus (format, onComplete) {
  const statusObject = {
    appVersion: packageJson.version,
    appName: packageJson.name,
    timestampNY: moment().tz('America/New_York').format('dddd, YYYY MMMM Do, HH:mm (hh:mm a)'),
    timestampUTC: moment().tz('UTC').format('dddd, YYYY MMMM Do, HH:mm (hh:mm a)'),
    environment_variables: 'use ?format=full to see these'
  }

  if (format === 'full') { statusObject.environment_variables = process.env }

  onComplete(null, statusObject)
}
