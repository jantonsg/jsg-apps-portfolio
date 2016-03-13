// drpxAs.directive.js
/*
  DrpxAsDirective
*/
'use strict';

module.exports = DrpxAsDirective;

/* @ngInject */
function DrpxAsDirective() {
  var directive = {
    restrict: 'A',
    link: link,
  };
  return directive;

  function link(scope, element, attrs) {
    // look for current controller (converts some-thing into someThing)
    var controllerName = element[0].tagName.toLowerCase()
      .replace(/[^\w]\w/g, function(a) { return a.slice(1).toUpperCase(); });
    var elementController = element.controller(controllerName);
    // register controller into the vm
    var vm = scope.vm = scope.vm || {};
    if (elementController) {
      vm[attrs.drpxAs] = elementController;
    } else {
      // or register the element
      vm[attrs.drpxAs] = element[0];
    }
  }
}