// index.js
/*
	Module apps
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('apps', [])

.factory('App', require('./App.factory'))
.factory('appDictionary', require('./AppDictionary.factory'))
.factory('appService', require('./AppService.factory'))

.name;