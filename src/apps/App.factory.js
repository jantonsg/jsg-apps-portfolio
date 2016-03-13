// App.factory.js
/*
	App:
		. icon
		. title
		. screenshots []
		. description
		. platforms
*/

'use strict';

module.exports = AppFactory;
var extend = require('angular').extend;

/* @ngInject */
function AppFactory() {
	/*jshint validthis: true */

	function App() {

	}

	App.prototype.take = take;

	return App;

	///////

	function take(app) {
		extend(this, app);
	}
}