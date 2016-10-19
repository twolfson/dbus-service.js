// Load in dependencies
var DBusService = require('../');

// jscs:disable maximumLineLength
// Test commands:
//   Monitor traffic:
//     dbus-monitor
//   List all services:
//     https://dbus.freedesktop.org/doc/dbus-specification.html#bus-messages-list-names
//     dbus-send --print-reply --type=method_call --dest=org.freedesktop.DBus /org/freedesktop/DBus org.freedesktop.DBus.ListNames
// jscs:enable maximumLineLength

// Start our tests
describe('A DBusService', function () {
  // TODO: Make this a utility
  before(function createDBusService (done) {
    this.dbusService = new DBusService();
    this.dbusService.connect(done);
  });
  after(function destroyDBusService () {
    // TODO: Run `disconnect` or similar (e.g. `.end()`)
    delete this.dbusService;
  });

  it('connects to DBus successfully', function () {
    // Errors caught by `before`
  });
});
