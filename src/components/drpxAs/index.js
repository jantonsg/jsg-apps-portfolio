// index.js
/*
	Module components.drpxAs

	Note: This component has been created by David Rodenas(drpicox) and 
	it is pending to be integrated with Angular 1.5
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('components.drpxAs', [])

.directive('drpxAs', require('./DrpxAs.directive'))

.name;