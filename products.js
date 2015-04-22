	var app=angular.module("http-products",[]);
	app.directive("statResponse",function(){
		return{
			restrict:"E",
			transclude: true,
			templateUrl:"response-status.html"
		};
	});
	app.directive("jsonpService",function(){
		return{
			restrict:"E",
			transclude: true,
			templateUrl:"jsonp-service.html"
		};
	});