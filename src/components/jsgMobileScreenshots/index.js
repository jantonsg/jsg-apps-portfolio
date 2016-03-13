/*
	Module components.jsgMobileScreenshots
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('components.jsgMobileScreenshots', [
	require('../drpxAs'),
])

.directive('jsgMobileScreenshots', require('./jsgMobileScreenshots.component'))

.name;