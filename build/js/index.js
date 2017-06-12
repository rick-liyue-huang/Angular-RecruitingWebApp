

angular.module('app', ['ui.router']);






































angular.module('app')
	.controller('mainController', ['$scope', function($scope){
		$scope.list = [{
			id: '1666',
			imgSrc: 'images/company-1.png',
			name: 'sale',
			companyName: 'qiandu',
			city: 'Melbourne',
			industry: 'IT',
			time: '2017-01-01'
		}, {
			id: '1888',
			imgSrc: 'images/company-2.png',
			name: 'engineer',
			companyName: 'google.com',
			city: 'Sydney',
			industry: 'IT',
			time: '2017-06-01'
		}];


	}]);
































angular.module('app')
	.controller('positionController', ['$scope', function($scope){
		





}]);


angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		
		$stateProvider.state('main', {
			url: '/main',
			templateUrl: 'view/main.html',
			controller: 'mainController'
		}).state('position', {
			url: '/position/:id',
			templateUrl: 'view/position.html',
			controller: 'positionController'
		});

		$urlRouterProvider.otherwise('main');
}]);





































angular.module('app')
	.directive('appCompany', [function() {

		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/company.html'
		};
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
	.directive('appHeadBar', [function() {

		return {

			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/headBar.html',
			scope: {
				text: '='
			},
			link: function(scope) {
				scope.back = function() {
					window.history.back();
				}
			}
		};
	}]);

angular.module('app')
	.directive('appPositionInfo', [function() {

		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/positionInfo.html',
			scope: {
				isActive: '='
			},
			link: function(scope) {
				scope.imagePath = scope.isActive ? 'images/star-active.png' : 'images/star.png';
			}
		};
	}]);
angular.module('app')
	.directive('appPositionList', [function() {

		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/positionlist.html',
			scope: {
				data: '='
			}
		};

	}]);