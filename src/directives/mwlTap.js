'use strict';

var angular = require('angular');

angular.module('mwl.calendar')
  .directive('mwlTap', ['$parse', function($parse) {
      return {
        restrict: 'A',
        compile: function($element, attr) {
          var fn = $parse(attr.mwlTap);
          return function ngEventHandler(scope, element) {
            element.on('touchend', function(event) {
              function callback() {
                fn(scope, {$event: event});
              }
              scope.$apply(callback);
            });
          };
        }
      };
    }]);
