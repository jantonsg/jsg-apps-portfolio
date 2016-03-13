/*
	Module components.jsgIframe
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('components.jsgIframe', [])

.directive('jsgIframe', require('./jsgIframe.component'))

.name;