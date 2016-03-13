// AppsDetail.config.js
/*
	AppsDetail

*/
'use strict';

module.exports = AppsDetailConfig;

/* @ngInject */
function AppsDetailConfig($routeProvider) {
	$routeProvider.when('/:appid', {
		template: require('./AppsDetail.tpl.html'),
		controller: AppsDetailController,
		controllerAs: 'vm',
		resolve: {
			app: loadAppResolver 
		}
	});
}

/// Resolvers
/* @ngInject */
function loadAppResolver($route, appService) {
	var app = appService.getApp($route.current.params.appid);
	if (!app){
		return appService.loadApps()
		.then(function(){
			return appService.getApp($route.current.params.appid);
		});
	}
	return app;
}
///////

/* @ngInject */
function AppsDetailController(app, $location) {
	var vm = this;

	init();

	function init(){
		// Header configuration
		vm.mobileHeader = {	
			'title' : app.title,
			'showBackBtn': true
		};
		vm.goBackButton = goBackButton;

		vm.app = app;
	}

	function goBackButton(){
		$location.path('/');
	}
	
}
