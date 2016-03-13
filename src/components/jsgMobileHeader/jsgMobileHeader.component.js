// jsgMobileHeader.component.js
/*
	jsgMobileHeader
*/
'use strict';

module.exports = jsgMobileHeaderComponent;

/* @ngInject */
function jsgMobileHeaderComponent() {
	var component = {
		restrict: 'E',
		template: require('./jsgMobileHeader.tpl.html'),
		scope: {},
		controller: JsgMobileHeaderController,
		controllerAs: 'vm',
		bindToController: {
			title: '=',
			showbackbtn: '=',
			fireGoBack: '&onGoBack'
		},
	};
	return component;
}

/* @ngInject */
function JsgMobileHeaderController() {
	//var vm = this;

	///////
}

