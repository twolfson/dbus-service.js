// Load in our dependencies
var assert = require('assert');
var net = require('net');

/**
 * Define our constructor
 * @param {Object} options - Container for options
 * @param {String} options.busAddress - Address to connect to for DBus
 *   See https://dbus.freedesktop.org/doc/dbus-specification.html#addresses for more docs
 *   By default, if no address is provided, then we will use the environment variable `DBUS_SYSTEM_BUS_ADDRESS`
 *   If the environment variable isn't provided, then we will use 'unix:path=/var/run/dbus/system_bus_socket'
 */
function DBusService(options) {
  // Fallback our options
  options = options || {};

  // Determine our DBus address
  // https://dbus.freedesktop.org/doc/dbus-specification.html#addresses
  // DEV: Fallback chain defined by https://dbus.freedesktop.org/doc/dbus-specification.html#message-bus-types-system
  // TODO: Support non-`unix:` variants
  // TODO: Support `;` delimited connections
  // TODO: Support escaping address info
  // TODO: Parse `busAddress` (e.g. `,` and `=` extraction) and reject invalid protocols
  this.busAddress = options.busAddress || process.env.DBUS_SYSTEM_BUS_ADDRESS || DBusService.DEFAULT_BUS_ADDRESS;
}
// DEV: Default address from https://dbus.freedesktop.org/doc/dbus-specification.html#message-bus-types-system
DBusService.DEFAULT_BUS_ADDRESS = 'unix:path=/var/run/dbus/system_bus_socket';
DBusService.prototype = {
  connect: function (cb) {
    // Verify we only have 1 connection
    assert.strictEqual(this.dbusSocket, undefined, '`DBusService.connect()` was called twice ' +
      'without a `.disconnect()`. Please use multiple `DBusService` or run `.disconnect()` first');

    // TODO: Dynamically use a socket or otherwise depending on bus address variant
    // TODO: Use our damn `busAddress`
    // https://nodejs.org/api/net.html#net_new_net_socket_options
    var that = this;
    this.dbusSocket = new net.Socket({readable: true, writable: true});
    this.dbusSocket.on('error', cb);
    this.dbusSocket.on('data', console.log);
    this.dbusSocket.connect('/var/run/dbus/system_bus_socket', function handleConnect () {
      // Write some data
      // that.dbusSocket.write('Hello');

      // TODO: Add message routing
      //   The word we were missing was "Signal"
      //   https://dbus.freedesktop.org/doc/dbus-specification.html#message-bus-routing
      //   Finally got it thanks to: http://www.matthew.ath.cx/misc/dbus
      //   Something like: dbus-send --print-reply --type=method_call --dest=org.freedesktop.DBus /org/freedesktop/DBus org.freedesktop.DBus.AddMatch "string:type='signal',sender='org.freedesktop.DBus',interface='org.freedesktop.DBus',member='Foo',path='/bar/foo',destination=':452345.34',arg2='bar'"
      //     should work

      // Callback
      cb();
    });
  }
};

// Export our function
module.exports = DBusService;
