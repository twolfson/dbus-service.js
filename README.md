# dbus-service.js [![Build status](https://travis-ci.org/twolfson/dbus-service.js.svg?branch=master)](https://travis-ci.org/twolfson/dbus-service.js)

JavaScript implementation for D-Bus services

This was written for [google-music-electron][], a desktop application for Google Music. We wanted to use a JS based DBus implementation to simplify builds and dependencies. We were unable to use [dbus-native][] due to lack of required features (e.g. `GetAll()` ([#102][dbus-native-102]) and `Set()` ([#72][dbus-native-72]) not being supported).

TODO: Add link for google-music-electron

[dbus-native-102]: https://github.com/sidorares/node-dbus/issues/102
[dbus-native-72]: https://github.com/sidorares/node-dbus/issues/72

## Getting Started
Install the module with: `npm install dbus-service.js`

```js
var DBusService = require('dbus-service.js');
void new DBusService(); // 'awesome'
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via `npm run lint` and test via `npm test`.

## Donating
Support this project and [others by twolfson][gratipay] via [gratipay][].

[![Support via Gratipay][gratipay-badge]][gratipay]

[gratipay-badge]: https://cdn.rawgit.com/gratipay/gratipay-badge/2.x.x/dist/gratipay.svg
[gratipay]: https://www.gratipay.com/twolfson/

## Unlicense
As of Oct 19 2016, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
