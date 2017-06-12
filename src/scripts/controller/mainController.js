
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





























