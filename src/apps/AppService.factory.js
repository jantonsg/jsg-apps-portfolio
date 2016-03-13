// AppService.factory.js
/*
	AppService:
		- loadApps
		- getApp   

*/
'use strict';

module.exports = AppServiceFactory;

/* @ngInject */
function AppServiceFactory($http, appDictionary) {
	var service = {
		loadApps: loadApps, //()
		getApp: getApp, //(appId)

	};
	return service;

	//////

	function loadApps(){
		return $http.get('http://jantoniosances.com/sg-portfolio/sgportfolio.json')
		.then(function(response){
			appDictionary.addAll(response.data.apps);
			return appDictionary.list;
		});
	}

	function getApp(appid){
		var app = appDictionary.map[appid];
		if (app){
			return app; 
		}
	}
}