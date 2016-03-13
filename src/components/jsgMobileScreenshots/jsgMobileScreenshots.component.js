// jsgMobileScreenshots.component.js
/*
	jsgMobileScreenshots
*/
'use strict';

module.exports = jsgMobileScreenshotsComponent;

/* @ngInject */
function jsgMobileScreenshotsComponent() {
	var component = {
		restrict: 'E',
		template: require('./jsgMobileScreenshots.tpl.html'),
		scope: {},
		controller: JsgMobileScreenshotsController,
		controllerAs: 'vm',
		bindToController: {
			screenshots: '='
		},
	};
	return component;
}

/* @ngInject */
function JsgMobileScreenshotsController() {
	var vm = this;

	vm.selectImage = selectImage;

	///////

	function selectImage(imageSrc){
		vm.poster.src = imageSrc;
	}
}

