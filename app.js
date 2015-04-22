(function(uiuxbiz) {
	'use strict';
	var app = angular.module('httpService', ['http-products']);
	app.controller('FetchController', ['$scope', '$http', '$templateCache',
	function($scope, $http, $templateCache) {
		$scope.method = 'GET';
		$scope.url = 'http-service.html';

		$scope.fetch = function() {
			$scope.code = null;
			$scope.response = null;

			var service = $http({
				method : $scope.method,
				url : $scope.url,
				cache : $templateCache
			});
			service.success(function(data, status) {
				$scope.status = status;
				$scope.data = data;
			});
			service.error(function(data, status) {
				$scope.data = data || "Request failed";
				$scope.status = status;
			});
		};

		$scope.updateModel = function(method, url) {
			$scope.method = method;
			$scope.url = url;
		};
	}]);

})(window.uiuxbiz); 