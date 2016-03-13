// index.js
/*
	Module apps-catalog
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('apps-catalog', [

	require('../components/jsgMobileHeader'),
	require('../components/jsgMobilePlatforms'),

	require('./components'),
	require('./routes'),
])

.name;