/**
 * 
 */
'use strict';
angular
		.module('app')
		.controller(
				'LoginController',
				[
						'$scope', '$state', '$httpParamSerializer', '$http', '$cookies',
						function($scope, $state, $httpParamSerializer, $http, $cookies) {
							var busy = false;
							
							$scope.login = function(user) {
								busy = true;								
								$scope.data = {
								        grant_type:"password", 
								        username: "admin", 
								        password: "admin", 
								        client_id: "restapp-client-4",
								        client_secret: "55b8e1f9-9dad-11e5-92f6-7ca78c667444"
								};
								$scope.encoded = btoa("restapp-client-4:55b8e1f9-9dad-11e5-92f6-7ca78c667444");
								    
								var req = {
									method : 'POST',
									url : "http://localhost:8081/projectTemplate3/oauth/token",
									headers : {
										"Authorization" : "Basic " + $scope.encoded,
										"Content-type" : "application/x-www-form-urlencoded; charset=utf-8"
									},
									data : $httpParamSerializer($scope.data)
								}
								
								$http(req).then(
												function(data) {
													busy = false;
													$http.defaults.headers.common.Authorization = 'Bearer '	+ data.data.access_token;
													$cookies.put("access_token", data.data.access_token);	
													console.log(data);
												});
							};

							$scope.loading = function() {
								return busy;
							};
						} ]);