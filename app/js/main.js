/**
 * Created by vellovaherpuu on 08/11/15.
 */

var app = angular.module("troubleshooter");

app.controller("mainController", ["$scope", "$http", function($scope, $http){
    $http.get("proto2.json").then(function(result){
        $scope.data = result.data;
        $scope.view = $scope.data[0];
    });
    $scope.breadCrumbs = [];

    $scope.setItemActive = function(item){
        var idx = $scope.breadCrumbs.indexOf(item);
        if(idx > -1){
            var newArr = [];
            for(var i = 0; i<idx;i++){
                newArr.push($scope.breadCrumbs[i]);
            }
            $scope.breadCrumbs = newArr;
            $scope.view = item;
        } else {
            $scope.breadCrumbs.push($scope.view);
            $scope.view = item;
        }
    };

    $scope.activateNextChild = function(){
        $scope.setItemActive($scope.view.childs[0]);
    };

    $scope.activatePreviousItem = function(){
        $scope.view = $scope.breadCrumbs.pop();
    };
}]);