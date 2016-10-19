// Load in dependencies
var assert = require('assert');
var dbus = require('../');

// Start our tests
describe('dbus', function () {
  it('returns awesome', function () {
    assert.strictEqual(dbus(), 'awesome');
  });
});
