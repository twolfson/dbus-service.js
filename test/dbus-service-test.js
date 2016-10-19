// Load in dependencies
var assert = require('assert');
var dbusService = require('../');

// jscs:disable maximumLineLength
// Test commands:
//   Monitor traffic:
//     dbus-monitor
//   List all services:
//     https://dbus.freedesktop.org/doc/dbus-specification.html#bus-messages-list-names
//     dbus-send --print-reply --type=method_call --dest=org.freedesktop.DBus /org/freedesktop/DBus org.freedesktop.DBus.ListNames
// jscs:enable maximumLineLength

// Start our tests
describe('dbus-service', function () {
  it('returns awesome', function () {
    assert.strictEqual(dbusService(), 'awesome');
  });
});
