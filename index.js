'use strict';

var url = require('url');
var path = require('path');
var { app, BrowserWindow } = require('electron');
var client = require('electron-connect').client;

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 400,
    height: 300
  });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Connect to server process 
  client.create(mainWindow);
});