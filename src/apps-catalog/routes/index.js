// index.js
/*
	Module apps-catalog.routes
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('apps-catalog.routes', [

	require('angular-route'),
])

.config(require('./AppsCatalog.config'))

.name;