'use strict'

const config = require('config')
const low = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(config.storage)
const db = low(adapter)

const getKey = (key) => {
  const result = db.get(key).value()
  return result || 0
}

const setKey = (key) => {
  const result = db.get(key).value()
  db.set(key, result ? result + 1 : 1).write()
  return 'Saved ' + key
}

module.exports = {
  getKey: getKey,
  setKey: setKey
}
