'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('app')
	.directive('notifications',function(){
		return {
        templateUrl:'js/directives/notifications/notifications.html',
        restrict: 'E',
        replace: true,
    	}
	});


