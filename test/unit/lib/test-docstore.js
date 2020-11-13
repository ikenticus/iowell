'use strict'

const moment = require('moment-timezone')

describe('Test docstore:', function () {
  const expect = require('chai').expect
  const docstore = require('../../../lib/docstore.js')

  const stamp = moment().tz('UTC').toString()

  it('should get 0', function () {
    expect(docstore.getKey(stamp)).to.equal(0)
  })

  it('should save stamp', function () {
    expect(docstore.setKey(stamp)).to.equal('Saved ' + stamp)
  })

  it('should get 1', function () {
    expect(docstore.getKey(stamp)).to.equal(1)
  })

  it('should get 5', function () {
    for (let i = 0; i < 4; i++) docstore.setKey(stamp)
    expect(docstore.getKey(stamp)).to.equal(5)
  })
})
