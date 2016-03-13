'use strict';

var angular = require('angular');

module.exports = angular.module('storeAppsDemo', [

	require('./apps'),
	require('./apps-catalog'),
	require('./apps-detail'),

	require('angular-route'),
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/',
	});
})

.name;
