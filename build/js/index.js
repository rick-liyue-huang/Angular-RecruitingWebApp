

angular.module('app', ['ui.router']);







































angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		
		$stateProvider.state('main', {
			url: '/main',
			templateUrl: 'view/main.html',
			controller: 'mainController'
		});

		$urlRouterProvider.otherwise('main');
}]);





































angular.module('app')
	.controller('mainController', ['$scope', function($scope){
		
	}]);

angular.module('app')
	.directive('appFoot', [function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/foot.html'
		};
	}]);

























angular.module('app')
	.directive('appHead', [function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/head.html'
		}
	}])



































angular.module('app')
	.directive('appPositionList', [function() {

		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/positionlist.html'
		};

	}]);