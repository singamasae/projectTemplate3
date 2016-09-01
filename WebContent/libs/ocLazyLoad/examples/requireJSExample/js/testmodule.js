var testModule = angular.module('test', ['oc.lazyLoad']);

testModule.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        jsLoader: requirejs,
        debug: true
    });
}]);

testModule.controller('mainController', ['$scope', '$ocLazyLoad', function($scope, $ocLazyLoad) {
    $scope.test = "Hi there";
    $scope.partialUrl = '';

    $scope.load = function() {
        $ocLazyLoad.load('lazymodule').then(function() {
            $scope.partialUrl = 'partials/grid.html';
        }, function(e) {
            console.log(e);
        });
    }
}]);
