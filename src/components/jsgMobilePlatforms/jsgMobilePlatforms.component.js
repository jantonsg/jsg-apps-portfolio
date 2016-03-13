// jsgMobilePlatforms.component.js
/*
	jsgMobilePlatforms
*/
'use strict';

module.exports = jsgMobilePlatformsComponent;

/* @ngInject */
function jsgMobilePlatformsComponent() {
	var component = {
		restrict: 'E',
		template: require('./jsgMobilePlatforms.tpl.html'),
		scope: {},
		controller: JsgMobilePlatformsController,
		controllerAs: 'vm',
		bindToController: {
			platforms: '='
		},
	};
	return component;
}

/* @ngInject */
function JsgMobilePlatformsController() {
	//var vm = this;

	///////
}

