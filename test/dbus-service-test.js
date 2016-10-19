// Load in dependencies
var assert = require('assert');
var dbusService = require('../');

// Start our tests
describe('dbus-service', function () {
  it('returns awesome', function () {
    assert.strictEqual(dbusService(), 'awesome');
  });
});
