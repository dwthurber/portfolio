var portfolioApp = angular.module('portfolioApp', []);

    // create the controller and inject Angular's $scope
    portfolioApp.controller('mainController', function($scope) {
        
        $scope.project = "";
        
        $scope.isVisible = false;
        
        $scope.pickProject = function(val) {
            $scope.project = val;
            console.log(val);
            $scope.isVisible = true;
        };
        
        $scope.close = function(val) {
            $scope.isVisible = val;
        }
    });