'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('app')
	.directive('chat',function(){
		return {
        templateUrl:'js/directives/chat/chat.html',
        restrict: 'E',
        replace: true,
    	}
	});


