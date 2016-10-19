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

  // Determine our path
  // https://dbus.freedesktop.org/doc/dbus-specification.html#message-bus-types-system
  // TODO: Support non-`unix:` variants
  // TODO: Support `;` delimited connections
  // TODO: Support escaping address info
  this.busAddress = options.busAddress || process.env.DBUS_SYSTEM_BUS_ADDRESS || DBusService.DEFAULT_BUS_ADDRESS;
}
// https://dbus.freedesktop.org/doc/dbus-specification.html#message-bus-types-system
DBusService.DEFAULT_BUS_ADDRESS = 'unix:path=/var/run/dbus/system_bus_socket';

// Export our function
module.exports = DBusService;
