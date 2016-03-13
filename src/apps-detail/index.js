// index.js
/*
	Module apps-detail
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('apps-detail', [

	require('../components/jsgMobileHeader'),
	require('../components/jsgMobilePlatforms'),
	require('../components/jsgMobileScreenshots'),
	require('../components/jsgIframe'),

	require('./components'),
	require('./routes'),
])

.name;