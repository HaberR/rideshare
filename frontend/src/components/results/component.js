/**
 * Created by rafaelhaber on 1/16/17.
 */
var angular = require('angular');
angular.module('results')
    .component('resultscomp',{
        templateUrl : "components/results/template.html",
        controller : function($scope) {
            this.selected = {};
            $scope.chosen = false;
            $scope.$on("display-entry", function(event, params) {
                $scope.chosen = true;
                $scope.selected = params;
            });
        }
});