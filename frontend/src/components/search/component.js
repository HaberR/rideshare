/**
 * Created by rafaelhaber on 1/16/17.
 */

angular.module('search')
    .component('searchcomp', {
        templateUrl : "components/search/template.html",
        controller : function ($scope) {
            this.submit = function() {
                // console.log(this);
                var earliest = this.departingFrom ? new Date(this.departingFrom) : undefined;
                var latest = this.departingTo ? new Date(this.departingTo) : undefined;
                var address = [this.address, this.city, this.state, this.postalCode].join(" ");
                $scope.$emit("execute-search",{
                    destination : address,
                    maxFee : this.price,
                    earliest : earliest,
                    latest : latest
                });
            }
        }
});