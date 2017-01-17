/**
 * Created by rafaelhaber on 1/16/17.
 */
angular.module('browseTab')
    .component('browseTab', {
        templateUrl : "components/browse-tab/template.html",
        controller : function($scope) {
            $scope.$on("execute-search",function (event, params) {
                event.stopPropagation();
                $scope.$broadcast("executing-search", params);
            });

            $scope.$on('selected-entry',function(event, params) {
                event.stopPropagation();
                $scope.$broadcast('display-entry', params);
            })
        }
    });