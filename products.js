	var app=angular.module("http-products",[]);
	app.directive("statResponse",function(){
		return{
			restrict:"E",
			templateUrl:"response-status.html"
		};
	});
	app.directive("jsonpService",function(){
		return{
			restrict:"E",
			templateUrl:"jsonp-service.html"
		};
	});