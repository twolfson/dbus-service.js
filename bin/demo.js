#!/usr/bin/env node
// TODO: Move script into docs/ or similar
// Load in our dependencies
var DBusService = require('../');

// Create a sample listener
var dbusService = new DBusService();
dbusService.connect(function handleConnect (err) {
  // If there was an error, throw it
  if (err) {
    throw err;
  }

  // Otherwise, notify our user
  console.log('DBus service is now listening');
});
