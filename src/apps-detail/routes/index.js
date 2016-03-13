// index.js
/*
	Module apps-detail.routes
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('apps-detail.routes', [
	require('angular-route')
])

.config(require('./AppsDetail.config'))

.name;