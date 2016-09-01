/**
 * 
 */
'use strict';
angular.module('app').directive('hasPermission', [ 'permissionServices', function(permissionServices) {
	return {
		link : function(scope, element, attrs) {
			if (!_.isString(attrs.hasPermission))
				throw 'hasPermission value must be a string';

			var value = attrs.hasPermission.trim();
			var notPermissionFlag = value[0] === '!';
			if (notPermissionFlag) {
				value = value.slice(1).trim();
			}

			function toggleVisibilityBasedOnPermission() {
				var hasPermission = permissionServices.hasPermission(value);

				console.log('directive has-permission run...');
				if (hasPermission && !notPermissionFlag || !hasPermission && notPermissionFlag)
					element.show();
				else
					element.hide();
			}
			toggleVisibilityBasedOnPermission();
			scope.$on('permissionsChanged', toggleVisibilityBasedOnPermission);
		}
	};

} ]);