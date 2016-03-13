// AppsCatalog.config.js
/*
	AppsCatalog

*/
'use strict';

module.exports = AppsCatalogConfig;

/* @ngInject */
function AppsCatalogConfig($routeProvider) {
	$routeProvider.when('/', {
		template: require('./AppsCatalog.tpl.html'),
		controller: AppsCatalogController,
		controllerAs: 'vm',
		resolve: {
			apps: loadAppsResolver 
		}
	});
}

/// Resolvers
/* @ngInject */
function loadAppsResolver(appService) {
	return appService.loadApps();
}
///////

/* @ngInject */
function AppsCatalogController(apps, $location, appService) {
	var vm = this;

	init();
	vm.getApp = getApp;
	vm.goToApp = goToApp;


	function init(){
		vm.mobileHeader = {	
			'title' : 'Portfolio',
			'showBackBtn': false
		};
		vm.apps = apps; 
	}
	
	function getApp(appid){
		return appService.getApp(appid);
	}

	function goToApp(appid){
		$location.path('/'+appid);
	}
	
}
