'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('app')
	.directive('timeline',function() {
    return {
        templateUrl:'js/directives/timeline/timeline.html',
        restrict: 'E',
        replace: true,
    }
  });
