// jsgIframe.component.js
/*
	jsgIframe
*/
'use strict';

module.exports = jsgIframeComponent;

/* @ngInject */
function jsgIframeComponent() {
	var component = {
		restrict: 'E',
		template: require('./jsgIframe.tpl.html'),
		scope: {},
		controller: JsgIframeController,
		controllerAs: 'vm',
		bindToController: {
			mediaUrl: '='
		},
	};
	return component;
}

/* @ngInject */
function JsgIframeController($sce) {
	var vm = this;

	init();

	function init(){
		vm.formattedMediaUrl = $sce.trustAsResourceUrl(vm.mediaUrl);
	}
}

